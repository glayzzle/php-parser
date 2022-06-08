// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug64966.phpt
  it("Bug #64966 (segfault in zend_do_fcall_common_helper_SPEC)", function () {
    expect(parser.parseCode("<?php\nfunction test($func) {\n    try {\n        $a = $func(\"\");\n    } catch (Error $e) {\n        throw new Exception();\n    }\n    return true;\n}\nclass A {\n    public function b() {\n        test(\"strlen\");\n        test(\"iterator_apply\");\n    }\n}\n$a = new A();\n$a->b();\n?>")).toMatchSnapshot();
  });
});
