// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/enum/unit-cases.phpt
  it("Unit enums can list cases", function () {
    expect(parser.parseCode("<?php\nenum Suit {\n    case Hearts;\n    case Diamonds;\n    case Clubs;\n    case Spades;\n    /** @deprecated Typo, use Suit::Hearts */\n    const Hearst = self::Hearts;\n}\nvar_dump(Suit::cases());\n?>")).toMatchSnapshot();
  });
});
