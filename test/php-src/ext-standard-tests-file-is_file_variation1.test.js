// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/is_file_variation1.phpt
  it("Test is_file() function: usage variations - diff. files", function () {
    expect(parser.parseCode("<?php\n/* Testing is_file() with file containing data, truncating its size\n     and the file created by touch() */\n$file_path = __DIR__;\necho \"-- Testing is_file() with file containing data --\\n\";\n$filename = $file_path.\"/is_file_variation1.tmp\";\n$file_handle = fopen($filename, \"w\" );\nfwrite( $file_handle, \"Hello, world.....\" ); // expected true\nfclose($file_handle);\nvar_dump( is_file($filename) );\nclearstatcache();\necho \"\\n-- Testing is_file() after truncating filesize to zero bytes --\\n\";\n$file_handle = fopen( $file_path.\"/is_file_variation1.tmp\", \"r\");\nftruncate($file_handle, 0);\nfclose($file_handle);\nvar_dump( is_file($file_path.\"/is_file_variation1.tmp\") ); // expected true\nclearstatcache();\nunlink($file_path.\"/is_file_variation1.tmp\");\necho \"\\n-- Testing is_file() with an empty file --\\n\";\n/* created by fopen() */\nfclose( fopen($file_path.\"/is_file_variation1.tmp\", \"w\") );\nvar_dump( is_file($file_path.\"/is_file_variation1.tmp\") );  //expected true\nclearstatcache();\nunlink($file_path.\"/is_file_variation1.tmp\");\n/* created by touch() */\ntouch($file_path.\"/is_file_variation1.tmp\");\nvar_dump( is_file($file_path.\"/is_file_variation1.tmp\") ); // expected true\nclearstatcache();\nunlink($file_path.\"/is_file_variation1.tmp\");\necho \"\\n*** Done ***\";\n?>")).toMatchSnapshot();
  });
});
