// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/popen_pclose_error-sunos.phpt
  it("Test popen() and pclose function: error conditions", function () {
    expect(parser.parseCode("<?php\n$file_path = __DIR__;\necho \"*** Testing for error conditions ***\\n\";\nvar_dump( popen() );  // Zero Arguments\nvar_dump( popen(\"abc.txt\") );   // Single Argument\nvar_dump( popen(\"abc.txt\", \"rw\") );   // Invalid mode Argument\nvar_dump( pclose() );\n$file_handle = fopen($file_path.\"/popen.tmp\", \"w\");\nvar_dump( pclose($file_handle, $file_handle) );\nfclose($file_handle);\nvar_dump( pclose(1) );\necho \"\\n--- Done ---\";\n?>")).toMatchSnapshot();
  });
});
