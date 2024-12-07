import express from 'express'
import { GetUserByIdSchema } from '@schemas';
const app = express();
const port = 4000;

// Define the GET /products/{productId} route
app.get('/users/:id', (req, res) => {
    const { id } = GetUserByIdSchema.parse(req.params)

    res.json({
        id,
        firstName: "Max"
    }).send()
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});