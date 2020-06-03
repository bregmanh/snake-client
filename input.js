

const setupInput = function (handleUserInput) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.on('data', (key) => {
    handleUserInput(key);
  })
  stdin.resume();
  return stdin;

}
const handleUserInput = function (key) {
  if (key === '\u0003') {
    
    process.exit();
  }
}

setupInput(handleUserInput);

module.exports = {setupInput};


