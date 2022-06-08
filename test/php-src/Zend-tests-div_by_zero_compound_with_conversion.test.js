// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/div_by_zero_compound_with_conversion.phpt
  it("Division by zero in compound operator with type coercion", function () {
    expect(parser.parseCode("<?php\n$x = 42;\ntry {\n    $$x /= 0;\n} catch (DivisionByZeroError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
