// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/bug26862.phpt
  it("Bug #26862 (ob_flush() before output_reset_rewrite_vars() results in data loss)", function () {
    expect(parser.parseCode("<?php\nsession_start();\noutput_add_rewrite_var('var', 'value');\necho '<a href=\"file.php\">link</a>';\nob_flush();\noutput_reset_rewrite_vars();\necho '<a href=\"file.php\">link</a>';\n?>")).toMatchSnapshot();
  });
});
