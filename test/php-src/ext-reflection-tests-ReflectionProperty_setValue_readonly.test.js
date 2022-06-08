// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionProperty_setValue_readonly.phpt
  it("Test ReflectionProperty::setValue() error cases.", function () {
    expect(parser.parseCode("<?php\nenum Foo: int {\n    case Bar = 0;\n}\n$reflection = new ReflectionProperty(Foo::class, 'value');\ntry {\n    $reflection->setValue(Foo::Bar, 1);\n} catch (Error $e) {\n    echo $e->getMessage() . \"\\n\";\n}\nvar_dump(Foo::Bar->value);\n?>")).toMatchSnapshot();
  });
});
