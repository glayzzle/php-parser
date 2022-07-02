// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug51059.phpt
  it("Bug #51059 crypt() segfaults on certain salts", function () {
    expect(parser.parseCode("<?php\n$res = crypt('a', '_');\nif ($res === '*0' || $res === '*1') echo 'OK';\nelse echo 'Not OK';\n?>")).toMatchSnapshot();
  });
});
