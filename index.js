const express = require('express');


// Create server
const app = express();


app.get('/', (req, res) => {
    res.json({
        estado: true,
        mensaje: 'funciona!'
    })
});


const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
    console.log(`servidor andando en: ${PORT}`)
})
