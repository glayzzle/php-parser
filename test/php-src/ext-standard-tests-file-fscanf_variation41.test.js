// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/fscanf_variation41.phpt
  it("Test fscanf() function: usage variations - unsigned formats with resource", function () {
    expect(parser.parseCode("<?php\n/* Test fscanf() to scan resource type using different unsigned format types */\n$file_path = __DIR__;\necho \"*** Test fscanf(): different unsigned format types with resource ***\\n\";\n// create a file\n$filename = \"$file_path/fscanf_variation41.tmp\";\n$file_handle = fopen($filename, \"w\");\nif($file_handle == false)\n  exit(\"Error:failed to open file $filename\");\n// resource type variable\n$fp = fopen (__FILE__, \"r\");\n$dfp = opendir ( __DIR__ );\n// array of resource types\n$resource_types = array (\n  $fp,\n  $dfp\n);\n$unsigned_formats = array( \"%u\", \"%hu\", \"%lu\", \"%Lu\", \" %u\", \"%u \", \"% u\", \"\\t%u\", \"\\n%u\", \"%4u\", \"%30u\", \"%[0-9]\", \"%*u\");\n$counter = 1;\n// writing to the file\nforeach($resource_types as $value) {\n  @fprintf($file_handle, \"%s\", $value);\n  @fprintf($file_handle, \"\\n\");\n}\n// closing the file\nfclose($file_handle);\n// opening the file for reading\n$file_handle = fopen($filename, \"r\");\nif($file_handle == false) {\n  exit(\"Error:failed to open file $filename\");\n}\n$counter = 1;\n// reading the values from file using different unsigned formats\nforeach($unsigned_formats as $unsigned_format) {\n  // rewind the file so that for every foreach iteration the file pointer starts from bof\n  rewind($file_handle);\n  echo \"\\n-- iteration $counter --\\n\";\n  while( !feof($file_handle) ) {\n    try {\n      var_dump(fscanf($file_handle,$unsigned_format));\n    } catch (ValueError $exception) {\n      echo $exception->getMessage() . \"\\n\";\n    }\n  }\n  $counter++;\n}\n// closing the resources\nfclose($fp);\nclosedir($dfp);\necho \"\\n*** Done ***\";\n?>")).toMatchSnapshot();
  });
});
