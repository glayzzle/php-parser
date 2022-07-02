// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/lstat_stat_error.phpt
  it("Test lstat() and stat() functions: error conditions", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing lstat() for error conditions ***\\n\";\n$file_path = __DIR__;\nvar_dump( lstat(\"$file_path/temp.tmp\") ); // non existing file\nvar_dump( lstat(22) ); // scalar argument\necho \"\\n*** Testing stat() for error conditions ***\\n\";\nvar_dump( stat(\"$file_path/temp.tmp\") ); // non existing file\nvar_dump( stat(\"$file_path/temp/\") ); // non existing dir\nvar_dump( stat(22) ); // scalar argument\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
