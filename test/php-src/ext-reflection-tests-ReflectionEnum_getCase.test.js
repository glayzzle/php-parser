// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionEnum_getCase.phpt
  it("ReflectionEnum::getCases()", function () {
    expect(parser.parseCode("<?php\nenum Enum_ {\n    case Foo;\n    const Bar = self::Foo;\n}\nenum IntEnum: int {\n    case Foo = 0;\n    const Bar = self::Foo;\n}\nfunction test(string $enumName, string $caseName) {\n    try {\n        $reflectionEnum = new ReflectionEnum($enumName);\n        var_dump($reflectionEnum->getCase($caseName));\n    } catch (Throwable $e) {\n        echo get_class($e) . ': ' . $e->getMessage() . \"\\n\";\n    }\n}\ntest(Enum_::class, 'Foo');\ntest(Enum_::class, 'Bar');\ntest(Enum_::class, 'Baz');\ntest(IntEnum::class, 'Foo');\ntest(IntEnum::class, 'Bar');\ntest(IntEnum::class, 'Baz');\n?>")).toMatchSnapshot();
  });
});
