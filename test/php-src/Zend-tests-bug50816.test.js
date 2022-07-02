// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug50816.phpt
  it("Bug #50816 (Using class constants in array definition fails)", function () {
    expect(parser.parseCode("<?php\ndefine(\"ONE\", 1);\ndefine(\"TWO\", 1);\nclass Foo {\n  const ONE = 1;\n  const TWO = 1;\n  public static $mapWithConst = array(self::ONE => 'one', self::TWO => 'two',);\n  public static $mapWithConst1 = array(1 => 'one', self::TWO => 'two',);\n  public static $mapWithConst2 = array(self::ONE => 'one', 1 => 'two',);\n  public static $mapWithoutConst = array(1 => 'one', 1 => 'two',);\n}\n$mapWithConst = array(1 => 'one', 1 => 'two',);\n$mapWithoutConst = array(Foo::ONE => 'one', Foo::TWO => 'two',);\n$mapWithoutConst0 = array(1 => 'one', 1 => 'two',);\n$mapWithoutConst1 = array(ONE => 'one', 1 => 'two',);\n$mapWithoutConst2 = array(1 => 'one', TWO => 'two',);\n$mapWithoutConst3 = array(ONE => 'one', TWO => 'two',);\nvar_dump(Foo::$mapWithConst[1]);\nvar_dump(Foo::$mapWithConst1[1]);\nvar_dump(Foo::$mapWithConst2[1]);\nvar_dump(Foo::$mapWithoutConst[1]);\nvar_dump($mapWithConst[1]);\nvar_dump($mapWithoutConst[1]);\nvar_dump($mapWithoutConst0[1]);\nvar_dump($mapWithoutConst1[1]);\nvar_dump($mapWithoutConst2[1]);\nvar_dump($mapWithoutConst3[1]);\n?>")).toMatchSnapshot();
  });
});
