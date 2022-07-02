// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/bug41655_2.phpt
  it("Bug #41655 (open_basedir bypass via glob()) 2/2", function () {
    expect(parser.parseCode("<?php\n    $dir = __DIR__;\n    $a=glob($dir . \"/test*csv\");\n    print_r($a);\n?>")).toMatchSnapshot();
  });
});
