// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/extract_variation6.phpt
  it("Test extract() function (variation 6)", function () {
    expect(parser.parseCode("<?php\n/* EXTR_REFS as second Argument */\n$a = array ('foo' => 'aaa');\nvar_dump ( extract($a, EXTR_REFS));\nvar_dump($foo);\n$b = $a;\n$b['foo'] = 'bbb';\nvar_dump ( extract($a, EXTR_REFS));\nvar_dump($foo);\nvar_dump($a);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
