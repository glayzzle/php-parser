// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/enum/backed-tryFrom.phpt
  it("BackedEnum::tryFrom()", function () {
    expect(parser.parseCode("<?php\nenum Suit: string {\n    case Hearts = 'H';\n    case Diamonds = 'D';\n    case Clubs = 'C';\n    case Spades = 'S';\n}\nvar_dump(Suit::tryFrom('H'));\nvar_dump(Suit::tryFrom('D'));\nvar_dump(Suit::tryFrom('C'));\nvar_dump(Suit::tryFrom('S'));\nvar_dump(Suit::tryFrom('X'));\nenum Foo: int {\n    case Bar = 1;\n    case Baz = 2;\n    case Beep = 3;\n}\nvar_dump(Foo::tryFrom(1));\nvar_dump(Foo::tryFrom(2));\nvar_dump(Foo::tryFrom(3));\nvar_dump(Foo::tryFrom(4));\n?>")).toMatchSnapshot();
  });
});
