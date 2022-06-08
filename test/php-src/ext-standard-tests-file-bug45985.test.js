// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/bug45985.phpt
  it("Bug #35740 (touch() opened file raises a warning)", function () {
    expect(parser.parseCode("<?php\n$file = __DIR__ . '/' . '__tmp_35740.dat';\nfile_put_contents($file, 'test');\n$f = fopen($file, 'r');\ntouch($file);\nfclose($f);\n@unlink($file);\necho \"ok\";\n?>")).toMatchSnapshot();
  });
});
