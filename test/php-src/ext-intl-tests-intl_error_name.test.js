// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/intl_error_name.phpt
  it("intl_error_name()", function () {
    expect(parser.parseCode("<?php\n/*\n * Check getting error string by integer error code.\n */\nfunction check( $err_code )\n{\n    echo intl_error_name( $err_code ) . \"\\n\";\n}\ncheck( U_ZERO_ERROR );\ncheck( U_ILLEGAL_ARGUMENT_ERROR );\ncheck( U_USING_FALLBACK_WARNING );\n?>")).toMatchSnapshot();
  });
});
