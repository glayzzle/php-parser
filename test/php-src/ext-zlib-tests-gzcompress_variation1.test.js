// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/gzcompress_variation1.phpt
  it("Test gzcompress() function : variation", function () {
    expect(parser.parseCode("<?php\ninclude(__DIR__ . '/data.inc');\necho \"*** Testing gzcompress() : variation ***\\n\";\necho \"\\n-- Testing multiple compression --\\n\";\n$output = gzcompress($data);\nvar_dump( md5($output));\nvar_dump(md5(gzcompress($output)));\n?>")).toMatchSnapshot();
  });
});
