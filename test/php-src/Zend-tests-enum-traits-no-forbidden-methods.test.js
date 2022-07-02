// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/enum/traits-no-forbidden-methods.phpt
  it("Enum cannot have forbidden methods, even via traits", function () {
    expect(parser.parseCode("<?php\ntrait Rectangle {\n    public function __construct() {}\n}\nenum Suit {\n    use Rectangle;\n    case Hearts;\n    case Diamonds;\n    case Clubs;\n    case Spades;\n}\n?>")).toMatchSnapshot();
  });
});
