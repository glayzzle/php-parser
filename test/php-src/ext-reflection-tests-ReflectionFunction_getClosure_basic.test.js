// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionFunction_getClosure_basic.phpt
  it("Test ReflectionFunction::getClosure() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing ReflectionFunction::getClosure() : basic functionality ***\\n\";\nfunction foo()\n{\n    var_dump( \"Inside foo function\" );\n}\nfunction bar( $arg )\n{\n    var_dump( \"Arg is \" . $arg );\n}\n$func = new ReflectionFunction( 'foo' );\n$closure = $func->getClosure();\n$closure();\n$func = new ReflectionFunction( 'bar' );\n$closure = $func->getClosure();\n$closure( 'succeeded' );\n?>")).toMatchSnapshot();
  });
});
