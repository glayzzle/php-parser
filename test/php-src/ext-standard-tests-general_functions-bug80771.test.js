// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/bug80771.phpt
  it("Bug #80771 (phpinfo(INFO_CREDITS) displays nothing in CLI)", function () {
    expect(parser.parseCode("<?php\nob_start();\nphpinfo(INFO_CREDITS);\n$info = ob_get_clean();\nob_start();\nphpcredits();\n$credits = ob_get_clean();\nvar_dump(strpos($info, $credits) !== false);\n?>")).toMatchSnapshot();
  });
});
