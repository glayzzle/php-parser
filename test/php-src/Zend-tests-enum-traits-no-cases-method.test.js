// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/enum/traits-no-cases-method.phpt
  it("Using cases method from traits in enums has no effect", function () {
    expect(parser.parseCode("<?php\ntrait Rectangle {\n    public static function cases(): array {\n        return [];\n    }\n}\nenum Suit {\n    use Rectangle;\n    case Hearts;\n    case Diamonds;\n    case Clubs;\n    case Spades;\n}\nvar_dump(Suit::cases());\n?>")).toMatchSnapshot();
  });
});
