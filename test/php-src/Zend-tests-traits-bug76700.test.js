// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/bug76700.phpt
  it("Bug #76700 (false-positive \"Error: Call to protected method\" when using trait aliases)", function () {
    expect(parser.parseCode("<?php\ntrait T1\n{\n    protected function aa() { echo 123; }\n}\ntrait T2\n{\n    use T1 {\n        aa as public;\n    }\n}\nclass A\n{\n    use T1;\n}\nclass B extends A\n{\n    use T2;\n}\n$b = new B();\n$b->aa();\n?>")).toMatchSnapshot();
  });
});
