import http from 'node:http'


const port  = 8000

/* Accessing the server method */
/* Takes requests (req), and responds (res) */
const server = http.createServer((req, res) => {
    res.end("testing")
})

server.listen(() => console.log(`server running on port: ${port}`))



/* LEARNING NOTES:
    end() method sends data over the http and then ends the response. 
    To use the server, you need to specify a port (8000, for example).
*/