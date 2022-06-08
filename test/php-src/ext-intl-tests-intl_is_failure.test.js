// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/intl_is_failure.phpt
  it("intl_is_failure()", function () {
    expect(parser.parseCode("<?php\n/*\n * Check determining failure error codes.\n */\nfunction check( $err_code )\n{\n    var_export( intl_is_failure( $err_code ) );\n    echo \"\\n\";\n}\ncheck( U_ZERO_ERROR );\ncheck( U_USING_FALLBACK_WARNING );\ncheck( U_ILLEGAL_ARGUMENT_ERROR );\n?>")).toMatchSnapshot();
  });
});
