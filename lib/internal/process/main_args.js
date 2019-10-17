'use strict';

function mainArgs() {
  const { mainModule } = process;
  const trailingArgsCount = mainModule ? 2 : 1;
  return process.argv.slice(trailingArgsCount);
}

module.exports = {
  mainArgs
};
