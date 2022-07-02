// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/fgetc_variation3.phpt
  it("Test fgetc() function : usage variations - write only modes (Bug #42036)", function () {
    expect(parser.parseCode("<?php\n/*\n Description: Gets character from file pointer\n*/\n/* try fgetc on files which are opened in non readable modes\n    w, wb, wt,\n    a, ab, at,\n    x, xb, xt\n*/\n// include the header for common test function\ninclude (\"file.inc\");\necho \"*** Testing fgetc() with file opened in write only mode ***\\n\";\n$file_modes = array(\"w\", \"wb\", \"wt\", \"a\", \"ab\", \"at\", \"x\", \"xb\", \"xt\");\n$filename = __DIR__.\"/fgetc_variation3.tmp\";\nforeach ($file_modes as $file_mode ) {\n  echo \"-- File opened in mode : $file_mode --\\n\";\n  $file_handle = fopen($filename, $file_mode);\n  if(!$file_handle) {\n    echo \"Error: failed to open file $filename!\\n\";\n    exit();\n  }\n  $data = \"fgetc_variation test\";\n  fwrite($file_handle, $data);\n  // rewind the file pointer to beginning of the file\n  var_dump( rewind($file_handle) );\n  var_dump( ftell($file_handle) );\n  var_dump( feof($file_handle) );\n  // read from file\n  var_dump( fgetc($file_handle) ); // expected : no chars should be read\n  var_dump( ftell($file_handle) ); // ensure that file pointer position is not changed\n  var_dump( feof($file_handle) ); // check if end of file pointer is set\n  // close the file\n  fclose($file_handle);\n  // delete the file\n  unlink($filename);\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
