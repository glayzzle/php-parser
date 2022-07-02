// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/unexpected_ref_bug.phpt
  it("Crash when function parameter modified via unexpected reference", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public function __toString() {\n        global $my_var;\n        $my_var = 0;\n        return \",\";\n    }\n}\n$my_var = str_repeat(\"A\", 64);\n$data = call_user_func_array(\"explode\", array(new Test(), &$my_var));\n$my_var = str_repeat(\"A\", 64);\n$data = call_user_func_array(\"str_replace\", array(&$my_var, new Test(), \"foo\"));\necho \"Done.\\n\";\n?>")).toMatchSnapshot();
  });
});
