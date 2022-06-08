// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionEnumBackedCase_getBackingValue.phpt
  it("ReflectionEnumBackedCase::getBackingValue()", function () {
    expect(parser.parseCode("<?php\nenum Enum_ {\n    case Foo;\n}\nenum IntEnum: int {\n    case Foo = 0;\n}\nenum StringEnum: string {\n    case Foo = 'Foo';\n}\ntry {\n    var_dump(new ReflectionEnumBackedCase(Enum_::class, 'Foo'));\n} catch (ReflectionException $e) {\n    echo $e->getMessage() . \"\\n\";\n}\ntry {\n    var_dump(new ReflectionEnumBackedCase([], 'Foo'));\n} catch (Error $e) {\n    echo $e->getMessage() . \"\\n\";\n}\nvar_dump((new ReflectionEnumBackedCase(IntEnum::class, 'Foo'))->getBackingValue());\nvar_dump((new ReflectionEnumBackedCase(StringEnum::class, 'Foo'))->getBackingValue());\n?>")).toMatchSnapshot();
  });
});
