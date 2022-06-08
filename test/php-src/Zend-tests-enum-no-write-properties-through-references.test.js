// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/enum/no-write-properties-through-references.phpt
  it("Enum properties cannot be written to through references", function () {
    expect(parser.parseCode("<?php\nenum Foo: int {\n    case Bar = 0;\n}\ntry {\n    $bar = Foo::Bar;\n    $value = &$bar->value;\n    $value = 1;\n} catch (Error $e) {\n    echo $e->getMessage() . \"\\n\";\n}\nvar_dump(Foo::Bar->value);\n?>")).toMatchSnapshot();
  });
});
