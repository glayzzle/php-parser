// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/bug36365.phpt
  it("Bug #36365 (scandir duplicates file name at every 65535th file)", function () {
    expect(parser.parseCode("<?php\n$testdir = __DIR__ . '/bug36365';\nmkdir($testdir);\nfor ($i = 0; $i < 70000; $i++) {\n    touch(sprintf(\"$testdir/%05d.txt\", $i));\n}\nvar_dump(count(scandir($testdir)));\n?>")).toMatchSnapshot();
  });
});
