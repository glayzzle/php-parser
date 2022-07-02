// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/fgetc_variation2.phpt
  it("Test fgetc() function : usage variations - closed handle", function () {
    expect(parser.parseCode("<?php\n/* try reading a char using fgetc() using invalid handles\n    - closed file handle\n    - unset file handle\n*/\n// include the header for common test function\ninclude (\"file.inc\");\necho \"*** Testing fgetc() : usage variations ***\\n\";\necho \"-- Testing fgetc() with closed handle --\\n\";\n// open the file for reading\n$file_handle = fopen(__FILE__, \"r\");\n// close the file\nfclose($file_handle);\n// read from closed file\ntry {\n    var_dump( fgetc($file_handle) );\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
