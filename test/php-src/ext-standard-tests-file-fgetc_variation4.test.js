// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/fgetc_variation4.phpt
  it("Test fgetc() function : usage variations - different read modes", function () {
    expect(parser.parseCode("<?php\n/* read from fie using fgetc, file opened using different\n   read read modes */\necho \"*** Testing fgetc() : usage variations ***\\n\";\necho \"-- Testing fgetc() with files opened with different read modes --\\n\";\n$file_modes = array( \"a+\", \"a+b\", \"a+t\",\n                     \"x+\", \"x+b\", \"x+t\",\n                     \"w+\", \"w+b\", \"w+t\" );\n$filename = __DIR__.\"/fgetc_variation4.tmp\";\nforeach ($file_modes as $file_mode ) {\n  echo \"-- File opened in mode : $file_mode --\\n\";\n  $file_handle = fopen($filename, $file_mode);\n  if(!$file_handle) {\n    echo \"Error: failed to open file $filename!\\n\";\n    exit();\n  }\n  $data = \"fgetc\\n test\";\n  fwrite($file_handle, $data);\n  // rewind the file pointer to beginning of the file\n  var_dump( rewind($file_handle) );\n  var_dump( ftell($file_handle) );\n  var_dump( feof($file_handle) );\n  // read from file, at least 7 chars\n  for($counter =0; $counter < 7; $counter ++) {\n    var_dump( fgetc($file_handle) ); // expected : 1 char\n    var_dump( ftell($file_handle) );\n    var_dump( feof($file_handle) ); // check if end of file pointer is set\n  }\n  // close the file\n  fclose($file_handle);\n  // delete the file\n  unlink($filename);\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
