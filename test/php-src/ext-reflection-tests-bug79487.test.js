// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/bug79487.phpt
  it("Bug #79487 (::getStaticProperties() ignores property modifications)", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    public static $bar = 'orig';\n}\nFoo::$bar = 'new';\n$rc = new ReflectionClass('Foo');\nvar_dump($rc->getStaticProperties());\nclass A {\n  public static $a = 'A old';\n}\nclass B extends A {\n  public static $b = 'B old';\n}\n$rc = new ReflectionClass(B::class);\nA::$a = 'A new';\nvar_dump($rc->getStaticProperties());\n?>")).toMatchSnapshot();
  });
});
