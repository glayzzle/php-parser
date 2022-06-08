// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug76869.phpt
  it("Bug #76869 (Incorrect bypassing protected method accessibility check)", function () {
    expect(parser.parseCode("<?php\nclass A {\n    private function f() {\n        return \"A\";\n    }\n}\nclass B extends A {\n    protected function f() {\n        return \"B\";\n    }\n}\n$b = new B();\ntry {\n    var_dump($b->f());\n} catch (Throwable $e) {\n    echo \"Exception: \", $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
