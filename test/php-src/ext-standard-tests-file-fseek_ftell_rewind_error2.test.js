// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/fseek_ftell_rewind_error2.phpt
  it("Test fseek(), ftell() & rewind() functions : error conditions - ftell()", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing ftell() : error conditions ***\\n\";\n// ftell on a file handle which is already closed\necho \"-- Testing ftell with closed/unset file handle --\\n\";\n$fp = fopen(__FILE__, \"r\");\nfclose($fp);\ntry {\n    var_dump(ftell($fp));\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
