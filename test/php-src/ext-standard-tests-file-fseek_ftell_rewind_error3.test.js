// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/fseek_ftell_rewind_error3.phpt
  it("Test fseek(), ftell() & rewind() functions : error conditions - rewind()", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing rewind() : error conditions ***\\n\";\n// rewind on a file handle which is already closed\necho \"-- Testing rewind() with closed/unset file handle --\\n\";\n$fp = fopen(__FILE__, \"r\");\nfclose($fp);\ntry {\n    var_dump(rewind($fp));\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
