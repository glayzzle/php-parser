// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/enum/no-dynamic-properties.phpt
  it("Enum case disallows dynamic properties", function () {
    expect(parser.parseCode("<?php\nenum Foo {\n    case Bar;\n}\n$bar = Foo::Bar;\ntry {\n    $bar->baz = 'Baz';\n} catch (\\Error $e) {\n    echo $e->getMessage();\n}\n?>")).toMatchSnapshot();
  });
});
