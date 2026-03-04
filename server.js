import http from 'node:http'
import { getDataFromDB } from './database/db.js'
import { stringify } from 'node:querystring'


const port = 8000


/* Accessing the server method */
/* Takes requests (req), and responds (res) */

const server = http.createServer(async (req, res) => {
  const destinations = await getDataFromDB()

    if(req.url === '/' && req.method === 'GET') {
        res.end(JSON.stringify(Destinations))
    }
})

server.listen(() => console.log(`Server running on port: ${port}`))


/* LEARNING NOTES:
    end() method sends data over the http and then ends the response. 
    To use the server, you need to specify a port (8000, for example).

    When an outside source send a request to port 8000, then the server will repsond with "test"
    since that is what is listed as a res.end.

    Use an if statement to dictate whether your server will respond to certain requests from specific url's. 
*/