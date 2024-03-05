// import http from 'http';
import app from './src/app.js';

const PORT = 3000

app.listen(PORT, () =>{
    console.log(`Listening to Server on port ${PORT}`)
});

