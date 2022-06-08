// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/intl_get_error_code.phpt
  it("intl_get_error_code()", function () {
    expect(parser.parseCode("<?php\n/*\n * Check getting global error code.\n */\n// Suppress warning messages.\nerror_reporting( E_ERROR );\nif( collator_get_locale(new Collator('en_US'), -1) !== false )\n    echo \"failed\\n\";\nelse\n{\n    $check_code = ( intl_get_error_code() != 0 );\n    echo ( $check_code ?  \"ok\" : \"failed\" ) . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
