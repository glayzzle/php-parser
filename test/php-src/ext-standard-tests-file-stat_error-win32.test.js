// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/stat_error-win32.phpt
  it("Test stat() function: error conditions", function () {
    expect(parser.parseCode("<?php\n$file_path = __DIR__;\n$arr = array(__FILE__);\necho \"\\n*** Testing stat() for error conditions ***\\n\";\nvar_dump( stat(\"$file_path/temp.tmp\") ); // non existing file\nvar_dump( stat(\"$file_path/temp/\") ); // non existing dir\nvar_dump( stat(22) ); // scalar argument\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
