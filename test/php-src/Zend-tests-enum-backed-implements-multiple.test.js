// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/enum/backed-implements-multiple.phpt
  it("Backed Enum with multiple implementing interfaces", function () {
    expect(parser.parseCode("<?php\ninterface Colorful {\n    public function color(): string;\n}\ninterface Shaped {\n    public function shape(): string;\n}\ninterface ExtendedShaped extends Shaped {\n}\nenum Suit: string implements Colorful, ExtendedShaped {\n    case Hearts = 'H';\n    case Diamonds = 'D';\n    case Clubs = 'C';\n    case Spades = 'S';\n    public function color(): string {\n        return match ($this) {\n            self::Hearts, self::Diamonds => 'Red',\n            self::Clubs, self::Spades => 'Black',\n        };\n    }\n    public function shape(): string {\n        return match ($this) {\n            self::Hearts => 'heart',\n            self::Diamonds => 'diamond',\n            self::Clubs => 'club',\n            self::Spades => 'spade',\n        };\n    }\n}\necho Suit::Hearts->color() . \"\\n\";\necho Suit::Hearts->shape() . \"\\n\";\necho Suit::Diamonds->color() . \"\\n\";\necho Suit::Diamonds->shape() . \"\\n\";\necho Suit::Clubs->color() . \"\\n\";\necho Suit::Clubs->shape() . \"\\n\";\necho Suit::Spades->color() . \"\\n\";\necho Suit::Spades->shape() . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
