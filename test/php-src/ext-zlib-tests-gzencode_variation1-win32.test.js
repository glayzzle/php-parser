// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/gzencode_variation1-win32.phpt
  it("Test gzencode() function : variation", function () {
    expect(parser.parseCode("<?php\ninclude(__DIR__ . '/data.inc');\necho \"*** Testing gzencode() : variation ***\\n\";\necho \"\\n-- Testing multiple compression --\\n\";\n$output = gzencode(gzencode($data));\n$back = gzdecode(gzdecode($output));\nvar_dump($data === $back);\n?>")).toMatchSnapshot();
  });
});
