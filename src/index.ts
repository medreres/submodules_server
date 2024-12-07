import express from 'express'
const app = express();
const port = 4000;


// Define the GET /products/{productId} route
app.get('/products/:productId', (req, res) => {
  console.debug(`getting product ${req.params.productId}`)
    const productId = req.params.productId;
    const product = {
        id: productId,
        name: `${productId} name`
    };
    res.json(product);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});