// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/bug60217b.phpt
  it("Bug #60217 (Requiring the same method from different traits and abstract methods have to be compatible)", function () {
    expect(parser.parseCode("<?php\ntrait TBroken1 {\n    public abstract function foo($a);\n}\ntrait TBroken2 {\n    public abstract function foo($a, $b = 0);\n}\nclass CBroken {\n    use TBroken1, TBroken2;\n    public function foo($a) {\n        echo 'FOO';\n    }\n}\n$o = new CBroken;\n$o->foo(1);\n?>")).toMatchSnapshot();
  });
});
