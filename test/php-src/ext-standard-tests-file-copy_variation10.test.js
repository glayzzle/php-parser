// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/copy_variation10.phpt
  it("Test copy() function: usage variations - identical names", function () {
    expect(parser.parseCode("<?php\n/* Test copy(): Try copying source file to desntination file, where destination file name is identical to source name */\n$file_path = __DIR__;\necho \"*** Test copy(): Trying to create a copy of file with the same source name ***\\n\";\n$file = $file_path.\"/copy_variation10.tmp\";\n$file_handle =  fopen($file, \"w\");\nfwrite($file_handle, str_repeat(\"Hello2world...\\n\", 100));\nfclose($file_handle);\nvar_dump( copy($file, $file) );\nvar_dump( file_exists($file) );\nvar_dump( filesize($file) );\necho \"*** Done ***\\n\";\n?>")).toMatchSnapshot();
  });
});
