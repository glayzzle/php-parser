// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/transliterator_create_error.phpt
  it("Transliterator::create (error)", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\nTransliterator::create(\"inexistent id\");\necho intl_get_error_message(), \"\\n\";\nTransliterator::create(\"bad UTF-8 \\x8F\");\necho intl_get_error_message(), \"\\n\";\necho \"Done.\\n\";\n?>")).toMatchSnapshot();
  });
});
