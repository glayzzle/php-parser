// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/fgets_variation2.phpt
  it("Test fgets() function : usage variations - closed handle", function () {
    expect(parser.parseCode("<?php\n/* try reading a line using fgets() using invalid handles\n    - closed file handle\n    - unset file handle\n*/\n// include the header for common test function\ninclude (\"file.inc\");\necho \"*** Testing fgets() : usage variations ***\\n\";\necho \"-- Testing fgets() with closed handle --\\n\";\n// open the file for reading\n$file_handle = fopen(__FILE__, \"r\");\n// close the file\nfclose($file_handle);\n// read from closed file\ntry {\n    var_dump( fgets($file_handle) ); // default length\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    var_dump( fgets($file_handle, 10) ); // with specific length\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
