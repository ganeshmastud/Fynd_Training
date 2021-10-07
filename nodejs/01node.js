const http = require( 'http' );
// import http from 'http';

const server = http.createServer();

// server.on( 'request', ( req, res ) => {
//     console.log( req.headers );
//     res.write( 'Hello, world\n' );
//     res.end( 'Ok, ttyl' );
// });

// (till 1024 port is reserved for standard services) - 65535
server.listen( 3000 );