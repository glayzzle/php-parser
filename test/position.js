var reader = require('../src/index');
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
console.log( '\nCLASS : ', cls[3][5]);


var method =  cls[3][5].methods[0];
// the result
console.log( '\nAST : ', method);
// the class code :
console.log( '\nPHP : >' + code.substring( method[1][2], method[2][2]) + '<' );
// the class AST
console.log( '\nMETHOD : ', method[3]);

var prop =  cls[3][5].properties[0];
// the result
console.log( '\nAST : ', prop);
// the class code :
console.log( '\nPHP : >' + code.substring( prop[1][2], prop[2][2]) + '<' );
// the class AST
console.log( '\nPROPERTY : ', prop[3]);

var variable =  prop[3][0];
// the result
console.log( '\nAST : ', variable);
// the class code :
console.log( '\nPHP : >' + code.substring( variable[1][2], variable[2][2]) + '<' );
// the class AST
console.log( '\nVARIABLE : ', variable[3]);


var itf = AST[1][2];
// the result
console.log( '\nAST : ', itf);
// the class code :
console.log( '\nPHP : >' + code.substring( itf[1][2], itf[2][2]) + '<' );
// the class AST
console.log( '\nINTERFACE : ', itf[3]);

var cst = itf[3][4].constants[0];
// the result
console.log( '\nAST : ', cst);
// the class code :
console.log( '\nPHP : >' + code.substring( cst[1][2], cst[2][2]) + '<' );
// the class AST
console.log( '\nCONSTANT : ', cst[3]);
