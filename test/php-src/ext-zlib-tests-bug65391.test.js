// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/bug65391.phpt
  it("Bug #65391 (Unable to send vary header user-agent when ob_start('ob_gzhandler') is called)", function () {
    expect(parser.parseCode("<?php\nheader(\"Vary: Cookie\");\nob_start(\"ob_gzhandler\");\n// run-tests cannot test for a multiple Vary header\nob_flush();\nprint_r(headers_list());\n?>\nDone")).toMatchSnapshot();
  });
});
