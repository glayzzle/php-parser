// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/bug74922c.phpt
  it("Bug #74922 (Composed class has fatal error with duplicate, equal const properties)", function () {
    expect(parser.parseCode("<?php\ntrait T {\n    public $x = self::X;\n}\ntrait T2 {\n    public $x = self::X;\n}\nclass C {\n    use T, T2;\n    const X = 42;\n}\nvar_dump((new C)->x);\n?>")).toMatchSnapshot();
  });
});
