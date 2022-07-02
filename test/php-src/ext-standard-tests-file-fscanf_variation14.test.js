// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/fscanf_variation14.phpt
  it("Test fscanf() function: usage variations - string formats with strings", function () {
    expect(parser.parseCode("<?php\n/* Test fscanf() to scan different strings using different string format types */\n$file_path = __DIR__;\necho \"*** Test fscanf(): different string format types with different string ***\\n\";\n// create a file\n$filename = \"$file_path/fscanf_variation14.tmp\";\n$file_handle = fopen($filename, \"w\");\nif($file_handle == false)\n  exit(\"Error:failed to open file $filename\");\n// different valid strings\n/* string created using Heredoc (<<<) */\n$heredoc_string = <<<EOT\nThis is string defined\nusing heredoc.\nEOT;\n/* heredoc string with only numerics */\n$heredoc_numeric_string = <<<EOT\n123456 3993\n4849 string\nEOT;\n/* null heardoc string */\n$heredoc_empty_string = <<<EOT\nEOT;\n$heredoc_null_string = <<<EOT\nNULL\nEOT;\n$valid_strings = array(\n  \"\",\n  \" \",\n  '',\n  ' ',\n  \"string\",\n  'string',\n  \"NULL\",\n  'null',\n  \"FALSE\",\n  'true',\n  \"\\x0b\",\n  \"\\0\",\n  '\\0',\n  '\\060',\n  \"\\070\",\n  \"0x55F\",\n  \"055\",\n  \"@#$#$%%$^^$%^%^$^&\",\n  $heredoc_string,\n  $heredoc_numeric_string,\n  $heredoc_empty_string,\n  $heredoc_null_string\n);\n// various string formats\n$string_formats = array( \"%s\",\n                         \"%hs\", \"%ls\", \"%Ls\",\n                         \" %s\", \"%s \", \"% s\",\n                         \"\\t%s\", \"\\n%s\", \"%4s\",\n                         \"%30s\", \"%[a-zA-Z0-9]\", \"%*s\"\n                  );\n$counter = 1;\n// writing to the file\nforeach($valid_strings as $string) {\n    try {\n        fprintf($file_handle, $string);\n    } catch (\\ValueError $e) {\n    } catch (\\ArgumentCountError $e) {\n    }\n  fprintf($file_handle, \"\\n\");\n}\n// closing the file\nfclose($file_handle);\n// opening the file for reading\n$file_handle = fopen($filename, \"r\");\nif($file_handle == false) {\n  exit(\"Error:failed to open file $filename\");\n}\n$counter = 1;\n// reading the values from file using different string formats\nforeach($string_formats as $string_format) {\n  // rewind the file so that for every foreach iteration the file pointer starts from bof\n  rewind($file_handle);\n  echo \"\\n-- iteration $counter --\\n\";\n  while( !feof($file_handle) ) {\n    try {\n      var_dump(fscanf($file_handle,$string_format));\n    } catch (ValueError $exception) {\n      echo $exception->getMessage() . \"\\n\";\n    }\n  }\n  $counter++;\n}\necho \"\\n*** Done ***\";\n?>")).toMatchSnapshot();
  });
});
