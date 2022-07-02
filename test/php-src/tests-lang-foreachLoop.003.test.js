// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/foreachLoop.003.phpt
  it("Foreach loop tests - error case: not an array.", function () {
    expect(parser.parseCode("<?php\necho \"\\nNot an array.\\n\";\n$a = TRUE;\nforeach ($a as $v) {\n    var_dump($v);\n}\n$a = null;\nforeach ($a as $v) {\n    var_dump($v);\n}\n$a = 1;\nforeach ($a as $v) {\n    var_dump($v);\n}\n$a = 1.5;\nforeach ($a as $v) {\n    var_dump($v);\n}\n$a = \"hello\";\nforeach ($a as $v) {\n    var_dump($v);\n}\necho \"done.\\n\";\n?>")).toMatchSnapshot();
  });
});
