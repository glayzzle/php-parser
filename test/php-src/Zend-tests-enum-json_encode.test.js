// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/enum/json_encode.phpt
  it("Enum in json_encode", function () {
    expect(parser.parseCode("<?php\nenum Foo {\n    case Bar;\n}\nenum IntFoo: int {\n    case Bar = 0;\n}\nenum StringFoo: string {\n    case Bar = 'Bar';\n}\nenum CustomFoo implements JsonSerializable {\n    case Bar;\n    public function jsonSerialize(): mixed {\n        return 'Custom ' . $this->name;\n    }\n}\nfunction test($value) {\n    var_dump(json_encode($value));\n    echo json_last_error_msg() . \"\\n\";\n    if (json_last_error() !== JSON_ERROR_NONE) {\n        echo json_last_error() . ' === '  . JSON_ERROR_NON_BACKED_ENUM . \":\\n\";\n        var_dump(json_last_error() === JSON_ERROR_NON_BACKED_ENUM);\n    }\n    try {\n        var_dump(json_encode($value, JSON_THROW_ON_ERROR));\n        echo json_last_error_msg() . \"\\n\";\n    } catch (Exception $e) {\n        echo get_class($e) . ': ' . $e->getMessage() . \"\\n\";\n    }\n}\ntest(Foo::Bar);\ntest(IntFoo::Bar);\ntest(StringFoo::Bar);\ntest(CustomFoo::Bar);\n?>")).toMatchSnapshot();
  });
});
