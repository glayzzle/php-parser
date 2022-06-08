// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/call_with_refs.phpt
  it("Check call to non-ref function with call-time refs", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public function __toString() {\n        global $my_var;\n        $my_var=0x12345;\n        return \"\";\n    }\n}\n$my_var = str_repeat(\"A\",64);\n$data = call_user_func_array(\"substr_replace\",array(&$my_var, new Test(), 1));\necho \"OK!\";\n?>")).toMatchSnapshot();
  });
});
