// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/transliterator_create_inverse_error.phpt
  it("Transliterator::createInverse (error)", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\ntransliterator_create_inverse(\"jj\");\n?>")).toMatchSnapshot();
  });
});
