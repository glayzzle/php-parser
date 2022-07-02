// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/fread_error.phpt
  it("Test fread() function : error conditions", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing error conditions ***\\n\";\n$filename = __FILE__;\n$file_handle = fopen($filename, \"r\");\n// invalid length argument\necho \"-- Testing fread() with invalid length arguments --\\n\";\n$len = 0;\ntry {\n    var_dump( fread($file_handle, $len) );\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n$len = -10;\ntry {\n    var_dump( fread($file_handle, $len) );\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
