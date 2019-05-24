const { createParser } = require('arg_parser');

const parser = createParser({
  '--foo': 1
});
const options = parser.parse();

if(options['--foo']) {
  process.stdout.write('ok');
}
