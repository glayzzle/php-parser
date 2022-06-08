// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/file_get_contents_file_put_contents_basic.phpt
  it("Test file_put_contents() and file_get_contents() functions : basic functionality", function () {
    expect(parser.parseCode("<?php\n$file_path = __DIR__;\ninclude($file_path.\"/file.inc\");\necho \"*** Testing the basic functionality of file_put_contents() and file_get_contents() functions ***\\n\";\necho \"-- Testing with simple valid data file --\\n\";\n$file_name = \"/file_put_contents.tmp\";\nfill_buffer($text_buffer, \"text\", 100);\nfile_put_contents( $file_path.$file_name, $text_buffer );\nvar_dump( file_get_contents($file_path.$file_name) );\necho \"\\n-- Testing with empty file --\\n\";\n$file_name = \"/file_put_contents1.tmp\";\nfile_put_contents( $file_path.$file_name, \"\");\nvar_dump( file_get_contents( $file_path.$file_name ) );\necho \"\\n*** Done ***\";\n?>")).toMatchSnapshot();
  });
});
