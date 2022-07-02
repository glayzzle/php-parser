// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/enum/backed-implements.phpt
  it("Backed Enum implements", function () {
    expect(parser.parseCode("<?php\ninterface Colorful {\n    public function color(): string;\n}\nenum Suit: string implements Colorful {\n    case Hearts = 'H';\n    case Diamonds = 'D';\n    case Clubs = 'C';\n    case Spades = 'S';\n    public function color(): string {\n        return match ($this) {\n            self::Hearts, self::Diamonds => 'Red',\n            self::Clubs, self::Spades => 'Black',\n        };\n    }\n}\necho Suit::Hearts->color() . \"\\n\";\necho Suit::Diamonds->color() . \"\\n\";\necho Suit::Clubs->color() . \"\\n\";\necho Suit::Spades->color() . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
