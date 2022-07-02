// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/enum/static-methods.phpt
  it("Enum supports static methods", function () {
    expect(parser.parseCode("<?php\nenum Size {\n    case Small;\n    case Medium;\n    case Large;\n    public static function fromLength(int $cm) {\n        return match(true) {\n            $cm < 50 => static::Small,\n            $cm < 100 => static::Medium,\n            default => static::Large,\n        };\n    }\n}\nvar_dump(Size::fromLength(23));\nvar_dump(Size::fromLength(63));\nvar_dump(Size::fromLength(123));\n?>")).toMatchSnapshot();
  });
});
