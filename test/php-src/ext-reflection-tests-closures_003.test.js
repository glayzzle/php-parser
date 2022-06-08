// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/closures_003.phpt
  it("Reflection on closures: Segfaults with getParameters() and getDeclaringFunction()", function () {
    expect(parser.parseCode("<?php\n$closure = function($a, $b = 0) { };\n$method = new ReflectionMethod ($closure, '__invoke');\n$params = $method->getParameters ();\nunset ($method);\n$method = $params[0]->getDeclaringFunction ();\nunset ($params);\necho $method->getName ().\"\\n\";\n$parameter = new ReflectionParameter (array ($closure, '__invoke'), 'b');\n$method = $parameter->getDeclaringFunction ();\nunset ($parameter);\necho $method->getName ().\"\\n\";\n?>")).toMatchSnapshot();
  });
});
