// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/closures_004.phpt
  it("Reflection on closures: Segfault with getClosure() on closure itself", function () {
    expect(parser.parseCode("<?php\n$closure = function() { echo \"Invoked!\\n\"; };\n$method = new ReflectionFunction ($closure);\n$closure2 = $method->getClosure ();\n$closure2 ();\n$closure2->__invoke ();\nunset ($closure);\n$closure2 ();\n$closure2->__invoke ();\n$closure = function() { echo \"Invoked!\\n\"; };\n$method = new ReflectionMethod ($closure, '__invoke');\n$closure2 = $method->getClosure ($closure);\n$closure2 ();\n$closure2->__invoke ();\nunset ($closure);\n$closure2 ();\n$closure2->__invoke ();\n?>")).toMatchSnapshot();
  });
});
