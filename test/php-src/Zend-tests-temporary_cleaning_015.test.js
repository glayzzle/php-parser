// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/temporary_cleaning_015.phpt
  it("Attempt to free invalid structure (result of ROPE_INIT is not a zval)", function () {
    expect(parser.parseCode("<?php\nset_error_handler(function () {\n    throw new Exception();\n});\n$a = [];\n$b = \"\";\ntry {\n     echo \"$a$b\\n\";\n} catch (Exception $ex) {\n}\n?>\nDONE")).toMatchSnapshot();
  });
});
