// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/enum/no-write-properties-through-foreach-reference.phpt
  it("Enum properties cannot be written to through reference in foreach", function () {
    expect(parser.parseCode("<?php\nenum Foo: int {\n    case Bar = 0;\n}\ntry {\n    $bar = Foo::Bar;\n    foreach ([1] as &$bar->value) {}\n} catch (Error $e) {\n    echo $e->getMessage() . \"\\n\";\n}\nvar_dump(Foo::Bar->value);\n?>")).toMatchSnapshot();
  });
});
