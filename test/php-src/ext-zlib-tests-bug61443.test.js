// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/bug61443.phpt
  it("bug #61443", function () {
    expect(parser.parseCode("<?php\nob_start(); echo \"foo\\n\"; ob_get_clean();\nif(!headers_sent()) ini_set('zlib.output_compression', true); echo \"end\\n\";\n?>\nDONE")).toMatchSnapshot();
  });
});
