// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/fwrite_error.phpt
  it("Test fwrite() function : error conditions", function () {
    expect(parser.parseCode("<?php\n// include the file.inc for Function: function delete_file($filename)\ninclude (\"file.inc\");\necho \"*** Testing fwrite() : error conditions ***\\n\";\n$filename = __DIR__.\"/fwrite_error.tmp\";\n$file_handle  = fopen ( $filename, \"w\");\n$data = \"data\";\n// invalid length argument\necho \"-- Testing fwrite() with invalid length arguments --\\n\";\n$len = 0;\nvar_dump( fwrite($file_handle, $data, $len) );\n$len = -10;\nvar_dump( fwrite($file_handle, $data, $len) );\n// fwrite() on a file handle which is already closed\necho \"-- Testing fwrite() with closed/unset file handle --\\n\";\nfclose($file_handle);\ntry {\n    var_dump(fwrite($file_handle,\"data\"));\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
