// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/fscanf_error.phpt
  it("Test fscanf() function: error conditions", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing fscanf() for error conditions ***\\n\";\n$file_path = __DIR__;\n$filename = \"$file_path/fscanf_error.tmp\";\n$file_handle = fopen($filename, 'w');\nif ($file_handle == false)\n  exit(\"Error:failed to open file $filename\");\nfwrite($file_handle, \"hello world\");\nfclose($file_handle);\n// invalid file handle\ntry {\n    fscanf($file_handle, \"%s\");\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n// number of formats in format strings not matching the no of variables\n$file_handle = fopen($filename, 'r');\nif ($file_handle == false)\n  exit(\"Error:failed to open file $filename\");\ntry {\n    fscanf($file_handle, \"%d%s%f\", $int_var, $string_var);\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\nfclose($file_handle);\n// different invalid format strings\n$invalid_formats = array(\"\", \"%\", \"%h\", \"%.\", \"%d%m\");\n// looping to use various invalid formats with fscanf()\nforeach($invalid_formats as $format)  {\n  $file_handle = fopen($filename, 'r');\n  if ($file_handle == false)\n    exit(\"Error:failed to open file $filename\");\n  try {\n    var_dump(fscanf($file_handle, $format));\n  } catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n  }\n  fclose($file_handle);\n}\necho \"\\n*** Done ***\";\n?>")).toMatchSnapshot();
  });
});
