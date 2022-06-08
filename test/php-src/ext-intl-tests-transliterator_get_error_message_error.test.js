// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/transliterator_get_error_message_error.phpt
  it("Transliterator::getErrorMessage (error)", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\necho transliterator_get_error_message(array()), \"\\n\";\n?>")).toMatchSnapshot();
  });
});
