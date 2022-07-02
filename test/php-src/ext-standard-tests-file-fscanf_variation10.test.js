// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/fscanf_variation10.phpt
  it("Test fscanf() function: usage variations - float formats with resource", function () {
    expect(parser.parseCode("<?php\n/* Test fscanf() to scan resource type using different float format types */\n$file_path = __DIR__;\necho \"*** Test fscanf(): different float format types with resource ***\\n\";\n// create a file\n$filename = \"$file_path/fscanf_variation10.tmp\";\n$file_handle = fopen($filename, \"w\");\nif($file_handle == false)\n  exit(\"Error:failed to open file $filename\");\n// resource type variable\n$fp = fopen (__FILE__, \"r\");\n$dfp = opendir ( __DIR__ );\n// array of resource types\n$resource_types = array (\n  $fp,\n  $dfp\n);\n$float_formats = array( \"%f\",\n                      \"%hf\", \"%lf\", \"%Lf\",\n                      \" %f\", \"%f \", \"% f\",\n                      \"\\t%f\", \"\\n%f\", \"%4f\",\n                      \"%30f\", \"%[0-9]\", \"%*f\"\n               );\n$counter = 1;\n// writing to the file\nforeach($resource_types as $value) {\n  @fprintf($file_handle, \"%s\", $value);\n  @fprintf($file_handle, \"\\n\");\n}\n// closing the file\nfclose($file_handle);\n// opening the file for reading\n$file_handle = fopen($filename, \"r\");\nif($file_handle == false) {\n  exit(\"Error:failed to open file $filename\");\n}\n$counter = 1;\n// reading the values from file using different formats formats\nforeach($float_formats as $float_format) {\n  // rewind the file so that for every foreach iteration the file pointer starts from bof\n  rewind($file_handle);\n  echo \"\\n-- iteration $counter --\\n\";\n  while( !feof($file_handle) ) {\n    try {\n      var_dump( fscanf($file_handle,$float_format) );\n    } catch (ValueError $exception) {\n      echo $exception->getMessage() . \"\\n\";\n    }\n  }\n  $counter++;\n}\n// closing the resources\nfclose($fp);\nclosedir($dfp);\necho \"\\n*** Done ***\";\n?>")).toMatchSnapshot();
  });
});
