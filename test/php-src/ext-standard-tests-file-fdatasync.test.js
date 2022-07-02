// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/fdatasync.phpt
  it("Test fdatasync() function: basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing fdatasync(): writing to a file and reading the contents ***\\n\";\n$data = <<<EOD\nfirst line of string\nsecond line of string\nthird line of string\nEOD;\n$file_path = __DIR__;\n$filename = \"$file_path/fdatasync_basic.tmp\";\n// opening a file\n$file_handle = fopen($filename, \"w\");\nif($file_handle == false)\n  exit(\"Error:failed to open file $filename\");\nif(PHP_OS_FAMILY == 'Windows')  {\n    $data = str_replace(\"\\r\",'', $data);\n}\n// writing data to the file\nvar_dump( fwrite($file_handle, $data) );\nvar_dump( fdatasync($file_handle) );\nvar_dump( readfile($filename) );\necho \"\\n*** Testing fdatasync(): for return type ***\\n\";\n$return_value = fdatasync($file_handle);\nvar_dump( is_bool($return_value) );\nfclose($file_handle);\necho \"\\n*** Testing fdatasync(): attempting to sync stdin ***\\n\";\n$file_handle = fopen(\"php://stdin\", \"w\");\nvar_dump(fdatasync($file_handle));\nfclose($file_handle);\necho \"\\n*** Testing fdatasync(): for non-file stream ***\\n\";\n$file_handle = fopen(\"php://memory\", \"w\");\n$return_value = fdatasync($file_handle);\nvar_dump( ($return_value) );\nfclose($file_handle);\necho \"\\n*** Done ***\";\n?>")).toMatchSnapshot();
  });
});
