// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/constant_expressions_exceptions_002.phpt
  it("Constant Expressions with unsupported operands 002", function () {
    expect(parser.parseCode("<?php\ntry {\n    require(\"constant_expressions_exceptions.inc\");\n} catch (Error $e) {\n    echo \"\\nException: \" . $e->getMessage() . \" in \" , $e->getFile() . \" on line \" . $e->getLine() . \"\\n\";\n}\n?>\nDONE")).toMatchSnapshot();
  });
});
