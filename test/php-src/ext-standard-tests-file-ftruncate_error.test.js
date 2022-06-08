// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/ftruncate_error.phpt
  it("Test ftruncate() function : error conditions", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing ftruncate() : error conditions ***\\n\";\n$filename = __DIR__.\"/ftruncate_error.tmp\";\n$file_handle = fopen($filename, \"w\" );\nfwrite($file_handle, \"Testing ftruncate error conditions \\n\");\nfflush($file_handle);\necho \"\\n Initial file size = \".filesize($filename).\"\\n\";\n// ftruncate() on a file handle which is already closed/unset\necho \"-- Testing ftruncate() with closed/unset file handle --\\n\";\n// ftruncate on close file handle\nfclose($file_handle);\ntry {\n    var_dump( ftruncate($file_handle,10) );\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n// check the first size\nvar_dump( filesize($filename) );\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
