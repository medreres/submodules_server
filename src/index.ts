import express from 'express'
import { GetMeOutputSchema, GetUserByIdSchema } from '@schemas';
const app = express();
const port = 4000;

app.get('/users/me', (_req, res) => {
    const response = {
        id: 1,
        firstName: "Max",
        lastName: "Pryhoda",
        age: 26
    }
    
    console.log('response', response)

    res.json(GetMeOutputSchema.parse(response)).send()
});


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