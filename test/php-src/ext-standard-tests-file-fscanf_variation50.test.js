// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/fscanf_variation50.phpt
  it("Test fscanf() function: usage variations - scientific formats with boolean", function () {
    expect(parser.parseCode("<?php\n/* Test fscanf() to scan boolean data using different scientific format types */\n$file_path = __DIR__;\necho \"*** Test fscanf(): different scientific format types with boolean data ***\\n\";\n// create a file\n$filename = \"$file_path/fscanf_variation50.tmp\";\n$file_handle = fopen($filename, \"w\");\nif($file_handle == false)\n  exit(\"Error:failed to open file $filename\");\n// array of boolean types\n$bool_types = array (\n  true,\n  false,\n  TRUE,\n  FALSE,\n);\n$scientific_formats = array( \"%e\", \"%he\", \"%le\", \"%Le\", \" %e\", \"%e \", \"% e\", \"\\t%e\", \"\\n%e\", \"%4e\", \"%30e\", \"%[0-9]\", \"%*e\");\n$counter = 1;\n// writing to the file\nforeach($bool_types as $value) {\n  @fprintf($file_handle, $value);\n  @fprintf($file_handle, \"\\n\");\n}\n// closing the file\nfclose($file_handle);\n// opening the file for reading\n$file_handle = fopen($filename, \"r\");\nif($file_handle == false) {\n  exit(\"Error:failed to open file $filename\");\n}\n$counter = 1;\n// reading the values from file using different scientific formats\nforeach($scientific_formats as $scientific_format) {\n  // rewind the file so that for every foreach iteration the file pointer starts from bof\n  rewind($file_handle);\n  echo \"\\n-- iteration $counter --\\n\";\n  while( !feof($file_handle) ) {\n    try {\n      var_dump(fscanf($file_handle,$scientific_format));\n    } catch (ValueError $exception) {\n      echo $exception->getMessage() . \"\\n\";\n    }\n  }\n  $counter++;\n}\necho \"\\n*** Done ***\";\n?>")).toMatchSnapshot();
  });
});
