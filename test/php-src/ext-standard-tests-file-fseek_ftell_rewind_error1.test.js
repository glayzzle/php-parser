// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/fseek_ftell_rewind_error1.phpt
  it("Test fseek(), ftell() & rewind() functions : error conditions - fseek()", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing fseek() : error conditions ***\\n\";\n// fseek() on a file handle which is already closed\necho \"-- Testing fseek() with closed/unset file handle --\\n\";\n$fp = fopen(__FILE__, \"r\");\nfclose($fp);\ntry {\n    var_dump(fseek($fp,10));\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
