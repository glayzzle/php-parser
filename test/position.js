var reader = require('../main');
reader.parser.locations = true;
var code = require('fs').readFileSync(__dirname + '/proto/foo.php').toString();
console.log(code);
var AST = reader.parseCode(code);

console.log('------------------ AST :');
var func = AST[1][0];
// the result
console.log( '\nAST : ', func);
// the function code :
console.log( '\nPHP : >' + code.substring( func[1][2], func[2][2]) + '<' );
// the function AST
console.log( '\nFUNCTION : ', func[3]);

var cls = AST[1][1];
// the result
console.log( '\nAST : ', cls);
// the class code :
console.log( '\nPHP : >' + code.substring( cls[1][2], cls[2][2]) + '<' );
// the class AST
console.log( '\CLASS : ', cls[3][5]);
