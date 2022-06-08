// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/file_error.phpt
  it("Test file() function : error conditions", function () {
    expect(parser.parseCode("<?php\n$file_path = __DIR__;\necho \"\\n*** Testing error conditions ***\\n\";\n$file_handle = fopen($file_path.\"/file.tmp\", \"w\");\n$filename = $file_path.\"/file.tmp\";\nvar_dump( file($filename, 10, NULL) );  //  Incorrect flag\nvar_dump( file(\"temp.tmp\") );  // non existing filename\nfclose($file_handle);\necho \"\\n--- Done ---\";\n?>")).toMatchSnapshot();
  });
});
