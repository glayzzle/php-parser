// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/bug60217a.phpt
  it("Bug #60217 (Requiring the same method from different traits.)", function () {
    expect(parser.parseCode("<?php\ntrait T1 {\n    public abstract function foo();\n}\ntrait T2 {\n    public abstract function foo();\n}\nclass C {\n    use T1, T2;\n    public function foo() {\n        echo \"C::foo() works.\\n\";\n    }\n}\n$o = new C;\n$o->foo();\n?>")).toMatchSnapshot();
  });
});
