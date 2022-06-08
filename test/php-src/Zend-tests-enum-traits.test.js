// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/enum/traits.phpt
  it("Enum can use traits", function () {
    expect(parser.parseCode("<?php\ntrait Rectangle {\n    public function shape(): string {\n        return \"Rectangle\";\n    }\n}\nenum Suit {\n    use Rectangle;\n    case Hearts;\n    case Diamonds;\n    case Clubs;\n    case Spades;\n}\necho Suit::Hearts->shape() . PHP_EOL;\necho Suit::Diamonds->shape() . PHP_EOL;\necho Suit::Clubs->shape() . PHP_EOL;\necho Suit::Spades->shape() . PHP_EOL;\n?>")).toMatchSnapshot();
  });
});
