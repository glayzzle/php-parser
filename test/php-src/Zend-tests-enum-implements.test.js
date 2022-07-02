// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/enum/implements.phpt
  it("Enum implements", function () {
    expect(parser.parseCode("<?php\ninterface Colorful {\n    public function color(): string;\n}\nenum Suit implements Colorful {\n    case Hearts;\n    case Diamonds;\n    case Clubs;\n    case Spades;\n    public function color(): string {\n        return match ($this) {\n            self::Hearts, self::Diamonds => 'Red',\n            self::Clubs, self::Spades => 'Black',\n        };\n    }\n}\necho Suit::Hearts->color() . \"\\n\";\necho Suit::Diamonds->color() . \"\\n\";\necho Suit::Clubs->color() . \"\\n\";\necho Suit::Spades->color() . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
