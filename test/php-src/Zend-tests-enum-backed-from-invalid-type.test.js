// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/enum/backed-from-invalid-type.phpt
  it("BackedEnum::from() reject invalid type", function () {
    expect(parser.parseCode("<?php\nenum Suit: string {\n    case Hearts = 'H';\n    case Diamonds = 'D';\n    case Clubs = 'C';\n    case Spades = 'S';\n}\ntry {\n    var_dump(Suit::from(42));\n} catch (Error $e) {\n    echo $e->getMessage() . \"\\n\";\n}\nenum Foo: int {\n    case Bar = 0;\n    case Baz = 1;\n}\ntry {\n    var_dump(Foo::from('H'));\n} catch (Error $e) {\n    echo $e->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
