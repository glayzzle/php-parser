// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/fileinfo/tests/bug68735.phpt
  it("Bug #68735 fileinfo out-of-bounds memory access", function () {
    expect(parser.parseCode("<?php\n    $test_file = __DIR__ . DIRECTORY_SEPARATOR . \"bug68735.jpg\";\n    $f = new finfo;\n    var_dump($f->file($test_file));\n?>")).toMatchSnapshot();
  });
});
