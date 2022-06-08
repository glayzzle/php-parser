// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/enum/backed-from.phpt
  it("BackedEnum::from()", function () {
    expect(parser.parseCode("<?php\nenum Suit: string {\n    case Hearts = 'H';\n    case Diamonds = 'D';\n    case Clubs = 'C';\n    case Spades = 'S';\n}\nvar_dump(Suit::from('H'));\nvar_dump(Suit::from('D'));\nvar_dump(Suit::from('C'));\nvar_dump(Suit::from('S'));\nenum Foo: int {\n    case Bar = 1;\n    case Baz = 2;\n    case Beep = 3;\n}\nvar_dump(Foo::from(1));\nvar_dump(Foo::from(2));\nvar_dump(Foo::from(3));\n?>")).toMatchSnapshot();
  });
});
