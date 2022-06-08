// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/fflush_basic.phpt
  it("Test fflush() function: basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing fflush(): writing to a file and reading the contents ***\\n\";\n$data = <<<EOD\nfirst line of string\nsecond line of string\nthird line of string\nEOD;\n$file_path = __DIR__;\n$filename = \"$file_path/fflush_basic.tmp\";\n// opening a file\n$file_handle = fopen($filename, \"w\");\nif($file_handle == false)\n  exit(\"Error:failed to open file $filename\");\nif(substr(PHP_OS, 0, 3) == \"WIN\")  {\n    $data = str_replace(\"\\r\",'', $data);\n}\n// writing data to the file\nvar_dump( fwrite($file_handle, $data) );\nvar_dump( fflush($file_handle) );\nvar_dump( readfile($filename) );\necho \"\\n*** Testing fflush(): for return type ***\\n\";\n$return_value = fflush($file_handle);\nvar_dump( is_bool($return_value) );\nfclose($file_handle);\necho \"\\n*** Done ***\";\n?>")).toMatchSnapshot();
  });
});
