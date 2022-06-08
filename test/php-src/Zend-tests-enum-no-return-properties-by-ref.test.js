// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/enum/no-return-properties-by-ref.phpt
  it("Enum properties cannot be returned by-ref", function () {
    expect(parser.parseCode("<?php\nenum Foo: int {\n    case Bar = 0;\n}\nfunction &getBarValueByRef() {\n    $bar = Foo::Bar;\n    return $bar->value;\n}\ntry {\n    $value = &getBarValueByRef();\n    $value = 1;\n} catch (Error $e) {\n    echo $e->getMessage() . \"\\n\";\n}\nvar_dump(Foo::Bar->value);\n?>")).toMatchSnapshot();
  });
});
