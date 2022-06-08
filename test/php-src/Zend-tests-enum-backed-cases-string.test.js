// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/enum/backed-cases-string.phpt
  it("String backed enums can list cases", function () {
    expect(parser.parseCode("<?php\nenum Suit: string {\n    case Hearts = 'H';\n    case Diamonds = 'D';\n    case Clubs = 'C';\n    case Spades = 'S';\n}\nvar_dump(Suit::cases());\n?>")).toMatchSnapshot();
  });
});
