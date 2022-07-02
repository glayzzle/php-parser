// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/bug78296.phpt
  it("Bug #78296 (is_file fails to detect file)", function () {
    expect(parser.parseCode("<?php\n$dir = str_pad(__DIR__ . '/bug78296', 250, '_');\nvar_dump(mkdir($dir));\nvar_dump(is_dir($dir));\n?>")).toMatchSnapshot();
  });
});
