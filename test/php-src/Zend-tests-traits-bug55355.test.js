// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/bug55355.phpt
  it("Bug #55355 (Abstract functions required by a trait are not correctly found when implemented in an ancestor class)", function () {
    expect(parser.parseCode("<?php\n// A trait that has a abstract function\ntrait ATrait {\n    function bar() {\n        $this->foo();\n    }\n    abstract function foo();\n}\n// A class on the second level in the\n// inheritance chain\nclass Level2Impl {\n    function foo() {}\n}\nclass Level1Indirect extends Level2Impl {}\n// A class on the first level in the\n// inheritance chain\nclass Level1Direct {\n    function foo() {}\n}\n// Trait Uses\nclass Direct {\n    use ATrait;\n    function foo() {}\n}\nclass BaseL2 extends Level1Indirect {\n    use ATrait;\n}\nclass BaseL1 extends Level1Direct {\n    use ATrait;\n}\necho 'DONE';\n?>")).toMatchSnapshot();
  });
});
