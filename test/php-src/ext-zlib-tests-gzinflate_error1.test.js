// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/gzinflate_error1.phpt
  it("Test gzinflate() function : error conditions", function () {
    expect(parser.parseCode("<?php\ninclude(__DIR__ . '/data.inc');\necho \"*** Testing gzinflate() : error conditions ***\\n\";\necho \"\\n-- Testing with a buffer that is too small --\\n\";\n$data = 'string_val';\n$short_len = strlen($data) - 1;\n$compressed = gzcompress($data);\nvar_dump(gzinflate($compressed, $short_len));\n?>")).toMatchSnapshot();
  });
});
