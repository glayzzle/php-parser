// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/enum/traits-no-properties.phpt
  it("Enum cannot have properties, even via traits", function () {
    expect(parser.parseCode("<?php\ntrait Rectangle {\n    protected string $shape = \"Rectangle\";\n    public function shape(): string {\n        return $this->shape;\n    }\n}\nenum Suit {\n    use Rectangle;\n    case Hearts;\n    case Diamonds;\n    case Clubs;\n    case Spades;\n}\n?>")).toMatchSnapshot();
  });
});
