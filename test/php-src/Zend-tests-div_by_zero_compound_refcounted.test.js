// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/div_by_zero_compound_refcounted.phpt
  it("Division by zero in compound assignment with refcounted operand", function () {
    expect(parser.parseCode("<?php\n$h = \"1\";\n$h .= \"2\";\ntry {\n    $h /= 0;\n} catch (DivisionByZeroError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nvar_dump($h);\n?>")).toMatchSnapshot();
  });
});
