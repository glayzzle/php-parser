var parser = require("../src/index");

describe("Function tests", function() {
  var ast = parser.parseEval(
    [
      "function &foo($a = 1, callable $b, ?array &...$params) : ?boolean {}",
      "$a = function &($b) use(&$c, $d) : array {",
      "  return true;",
      "};",
      "$b = foo(...[1, null, 1, 2, 3]);"
    ].join("\n")
  );

  it("test variadic error", function() {
    var astErr = parser.parseEval(["$b = foo(...[1, 2, 3], $a);"].join("\n"), {
      parser: {
        suppressErrors: true
      }
    });
    var msg = "Unexpected argument after a variadic argument on line 1";
    astErr.errors.length.should.be.exactly(1);
    astErr.errors[0].line.should.be.exactly(1);
    astErr.errors[0].message.should.be.exactly(msg);
  });

  it("test reserved word for function name error", function() {
    var astErr = parser.parseEval(["function list() {}"].join("\n"), {
      parser: {
        suppressErrors: true
      }
    });

    var msg =
      "Parse Error : syntax error, unexpected 'list' (T_LIST), expecting T_STRING on line 1";
    astErr.errors.length.should.be.exactly(1);
    astErr.errors[0].line.should.be.exactly(1);
    astErr.errors[0].message.should.be.exactly(msg);
  });

  it("test description", function() {
    // Get result from parser
    ast.children[0].kind.should.be.exactly("function");
    ast.children[0].name.should.be.exactly("foo");
    ast.children[0].byref.should.be.exactly(true);
    ast.children[0].nullable.should.be.exactly(true);
    ast.children[0].type.name.should.be.exactly("boolean");
  });

  it("test arguments", function() {
    /*
    // 1st param
    var arg1 = args[0];
    arg1[0].should.be.exactly('param');
    arg1[1].should.be.exactly('$a');
    should.equal(arg1[2], null);
    arg1[3][0].should.be.exactly('number');
    arg1[3][1].should.be.exactly('1');
    arg1[4].should.be.exactly(false, 'not byref');
    arg1[5].should.be.exactly(false, 'not variadic');

    // 2nd param
    var arg2 = args[1];
    arg2[0].should.be.exactly('param');
    arg2[1].should.be.exactly('$params');
    arg2[2][0].should.be.exactly('array');
    should.equal(arg2[3], null);
    arg2[4].should.be.exactly(true, 'byref');
    arg2[5].should.be.exactly(true, 'variadic');
    */
  });

  it("test closure", function() {
    var fn = ast.children[1].right;
    fn.kind.should.be.exactly("closure");
    fn.byref.should.be.exactly(true);
    fn.uses.length.should.be.exactly(2);
    fn.uses[0].kind.should.be.exactly("variable");
    fn.uses[0].name.should.be.exactly("c");
    fn.uses[0].byref.should.be.exactly(true);
    fn.uses[1].kind.should.be.exactly("variable");
    fn.uses[1].name.should.be.exactly("d");
    fn.uses[1].byref.should.be.exactly(false);
    fn.arguments.length.should.be.exactly(1);
    fn.arguments[0].kind.should.be.exactly("parameter");
    fn.arguments[0].name.should.be.exactly("b");
    fn.arguments[0].byref.should.be.exactly(false);
    fn.type.kind.should.be.exactly("identifier");
    fn.type.name.should.be.exactly("\\array");
    fn.nullable.should.be.exactly(false);
    fn.body.kind.should.be.exactly("block");
  });

  it("test static closure", function() {
    // from expr
    var ast = parser.parseEval("$a = static function() {};");
    var fn = ast.children[0].right;
    fn.kind.should.be.exactly("closure");
    fn.isStatic.should.be.exactly(true);
    // from statement
    ast = parser.parseEval("static function() {};");
    fn = ast.children[0];
    fn.kind.should.be.exactly("closure");
    fn.isStatic.should.be.exactly(true);
  });
});
