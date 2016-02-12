var reader = require('../main');
reader.parser.locations = true;
var code = require('fs').readFileSync(__dirname + '/proto/foo.php').toString();
console.log(code);
var AST = reader.parseCode(code);
console.log('------------------ AST :');
var func = AST[1][0];
// the function code :
console.log( 'PHP : ', code.substring( func[1][2], func[2][2]) );
// the function AST
console.log( 'AST : ', func[3]);