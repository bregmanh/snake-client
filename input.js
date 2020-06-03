let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', key => {
    handleUserInput(key, connection);
  });
  return stdin;
}
const handleUserInput = function (key, connection) {
  if (key === '\u0003') {
    process.exit();
  } else if (key === 'w') {
    connection.write('Move: up')

  } else if (key === 'a') {
    connection.write('Move: left')

  } else if (key === 'd') {
    connection.write('Move: right')

  } else if (key === 's') {
    connection.write('Move: down')
  }else if(key === 'm'){
    connection.write('Say: trolol')
  }
}

setupInput(handleUserInput);

module.exports = { setupInput };


