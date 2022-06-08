// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/gzdeflate_variation1.phpt
  it("Test gzdeflate() function : variation", function () {
    expect(parser.parseCode("<?php\ninclude(__DIR__ . '/data.inc');\necho \"*** Testing gzdeflate() : variation ***\\n\";\necho \"\\n-- Testing multiple compression --\\n\";\n$output = gzdeflate($data);\nvar_dump( md5($output));\nvar_dump(md5(gzdeflate($output)));\n?>")).toMatchSnapshot();
  });
});
