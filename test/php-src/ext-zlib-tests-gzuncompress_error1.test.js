// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/gzuncompress_error1.phpt
  it("Test gzuncompress() function : error conditions", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing gzuncompress() : error conditions ***\\n\";\necho \"\\n-- Testing with a buffer that is too small --\\n\";\n$data = 'string_val';\n$short_len = strlen($data) - 1;\n$compressed = gzcompress($data);\nvar_dump(gzuncompress($compressed, $short_len));\necho \"\\n-- Testing with incorrect arguments --\\n\";\nvar_dump(gzuncompress(123));\n?>")).toMatchSnapshot();
  });
});
