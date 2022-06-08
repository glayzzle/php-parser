// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug29944.phpt
  it("Bug #29944 (Function defined in switch, crashes)", function () {
    expect(parser.parseCode("<?php\n$a = 1;\nswitch ($a) {\n  case 1:\n    function foo($a) {\n      return \"ok\\n\";\n    }\n    echo foo($a);\n}\n?>")).toMatchSnapshot();
  });
});
