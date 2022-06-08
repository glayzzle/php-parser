// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/enum/comparison.phpt
  it("Enum comparison", function () {
    expect(parser.parseCode("<?php\nenum Foo {\n    case Bar;\n    case Baz;\n}\n$bar = Foo::Bar;\n$baz = Foo::Baz;\nvar_dump($bar === $bar);\nvar_dump($bar == $bar);\nvar_dump($bar === $baz);\nvar_dump($bar == $baz);\nvar_dump($baz === $bar);\nvar_dump($baz == $bar);\nvar_dump($bar > $bar);\nvar_dump($bar < $bar);\nvar_dump($bar >= $bar);\nvar_dump($bar <= $bar);\nvar_dump($bar > $baz);\nvar_dump($bar < $baz);\nvar_dump($bar >= $baz);\nvar_dump($bar <= $baz);\nvar_dump($bar > true);\nvar_dump($bar < true);\nvar_dump($bar >= true);\nvar_dump($bar <= true);\n?>")).toMatchSnapshot();
  });
});
