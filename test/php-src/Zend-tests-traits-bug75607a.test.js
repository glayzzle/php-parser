// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/bug75607a.phpt
  it("Bug #75607 (Comparison of initial static properties failing)", function () {
    expect(parser.parseCode("<?php\ntrait T1\n{\n    public static $prop1 = 1;\n}\ntrait T2\n{\n    public static $prop1 = 1;\n}\nclass Base\n{\n    use T1;\n}\nclass Child extends base\n{\n}\nclass Grand extends Child\n{\n    use T2;\n}\n$c = new Grand();\nvar_dump($c::$prop1);\n?>")).toMatchSnapshot();
  });
});
