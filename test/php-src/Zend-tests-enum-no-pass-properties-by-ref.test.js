// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/enum/no-pass-properties-by-ref.phpt
  it("Enum properties cannot be passed by-ref", function () {
    expect(parser.parseCode("<?php\nenum Foo: int {\n    case Bar = 0;\n}\nfunction setBarValueByRef(&$bar, $value) {\n    $bar = $value;\n}\ntry {\n    $bar = Foo::Bar;\n    $value = setBarValueByRef($bar->value, 1);\n} catch (Error $e) {\n    echo $e->getMessage() . \"\\n\";\n}\nvar_dump(Foo::Bar->value);\n?>")).toMatchSnapshot();
  });
});
