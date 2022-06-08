// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/transliterator_get_error_code_error.phpt
  it("Transliterator::getErrorCode (error)", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\necho transliterator_get_error_code(array()), \"\\n\";\n?>")).toMatchSnapshot();
  });
});
