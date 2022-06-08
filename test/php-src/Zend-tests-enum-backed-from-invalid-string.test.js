// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/enum/backed-from-invalid-string.phpt
  it("BackedEnum::from() reject invalid string", function () {
    expect(parser.parseCode("<?php\nenum Suit: string {\n    case Hearts = 'H';\n    case Diamonds = 'D';\n    case Clubs = 'C';\n    case Spades = 'S';\n}\ntry {\n    var_dump(Suit::from('A'));\n} catch (Error $e) {\n    echo $e->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
