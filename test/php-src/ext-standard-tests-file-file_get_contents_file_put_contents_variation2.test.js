// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/file_get_contents_file_put_contents_variation2.phpt
  it("Test file_get_contents() and file_put_contents() functions : usage variations - use_include_path", function () {
    expect(parser.parseCode("<?php\n/* Testing variation using use_include_path argument */\n$file_path = __DIR__;\ninclude($file_path.\"/file.inc\");\necho \"*** Testing with variation in use_include_path argument ***\\n\";\n$dir = \"file_get_contents_variation2\";\nmkdir($file_path.\"/\".$dir);\n$filename = $file_path.\"/\".$dir.\"/\".\"file_get_contents_variation2.tmp\";\nini_set( 'include_path',$file_path.\"/\".$dir );\n$data_array = array( 1, \"  Data1 in an array\", 2, \"  Data2 in an array\" );\nfill_buffer( $buffer, \"text\", 100);\nfile_put_contents( $filename, $buffer );\nfill_buffer( $buffer, \"numeric\", 100);\nfile_put_contents( $filename, $buffer, FILE_APPEND, NULL );\nfile_put_contents( $filename, $data_array, FILE_APPEND, NULL );\nvar_dump( file_get_contents($filename, 0) );\nvar_dump( file_get_contents($filename, 1) );\nvar_dump( file_get_contents($filename, 0, NULL, 5) );\nvar_dump( file_get_contents($filename, 1, NULL, 5) );\nvar_dump( file_get_contents($filename, 0, NULL, 5, 20) );\nvar_dump( file_get_contents($filename, 1, NULL, 5, 20) );\necho \"--- Done ---\";\n?>")).toMatchSnapshot();
  });
});
