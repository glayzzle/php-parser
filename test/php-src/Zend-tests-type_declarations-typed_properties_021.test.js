// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/typed_properties_021.phpt
  it("Test typed properties delay type check on constant", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    public int $bar = BAR::BAZ;\n}\ntry {\n    $foo = new Foo();\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
