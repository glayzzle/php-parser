// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_map_001.phpt
  it("array_map() and exceptions in the callback", function () {
    expect(parser.parseCode("<?php\n$a = array(1,2,3);\nfunction foo() {\n    throw new exception(1);\n}\ntry {\n    array_map(\"foo\", $a, array(2,3));\n} catch (Exception $e) {\n    var_dump(\"exception caught!\");\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
