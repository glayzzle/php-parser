// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/enum/no-new-through-reflection.phpt
  it("Enum no new through reflection", function () {
    expect(parser.parseCode("<?php\nenum Foo {}\ntry {\n    (new \\ReflectionClass(Foo::class))->newInstanceWithoutConstructor();\n} catch (Error $e) {\n    echo $e->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
