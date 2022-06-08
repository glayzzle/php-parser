// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/intl_get_error_message.phpt
  it("intl_get_error_message()", function () {
    expect(parser.parseCode("<?php\n/*\n * Check getting global error message.\n */\n// Suppress warning messages.\nerror_reporting( E_ERROR );\nif( collator_get_locale(new Collator('en_US'), -1) !== false )\n    echo \"failed\\n\";\nelse\n    printf( \"%s\\n\", intl_get_error_message() );\n?>")).toMatchSnapshot();
  });
});
