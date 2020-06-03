const net = require('net');
const { IP, PORT } = require('./constants');

/**
 * Establishes connection with the game server
 */
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  conn.on('connect', () => {
    console.log("Successfully connected to game server")
  });
  conn.on('connect', () => {
    conn.write('Name: HB');
  });
  conn.on('connect', () => {
    setTimeout(() => {
      conn.write('Move: up');
    }, 50)
    setTimeout(() => {
      conn.write('Move: up');
    }, 100)
    setTimeout(() => {
      conn.write('Move: up');
    }, 150)
    setTimeout(() => {
      conn.write('Move: up');
    }, 200)
    setTimeout(() => {
      conn.write('Move: up');
    }, 250)
  });
  // conn.on('connect', () => {
  //   setInterval(() => {
  //     conn.write('Move: right');
  //   }, 50)
    
  // });

  return conn;


}
module.exports = { connect };