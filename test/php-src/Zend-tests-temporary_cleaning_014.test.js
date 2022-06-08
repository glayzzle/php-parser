// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/temporary_cleaning_014.phpt
  it("Leak in JMP_SET", function () {
    expect(parser.parseCode("<?php\nset_error_handler(function() { throw new Exception; });\ntry {\n    new GMP ?: null;\n} catch (Exception $e) {\n}\n?>\nDONE")).toMatchSnapshot();
  });
});
