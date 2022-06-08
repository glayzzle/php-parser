// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/enum/backed-cases-int.phpt
  it("Int backed enums with can list cases", function () {
    expect(parser.parseCode("<?php\nenum Suit: int {\n    case Hearts = 2;\n    case Diamonds = 1;\n    case Clubs = 4;\n    case Spades = 3;\n}\nvar_dump(Suit::cases());\n?>")).toMatchSnapshot();
  });
});
