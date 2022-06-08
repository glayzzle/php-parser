// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/typed_properties_046.phpt
  it("Memory leaks on wrong assignment to typed property", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    public int $bbb;\n}\nfunction foo() {\n    return new Foo();\n}\nfunction bar() {\n    return str_repeat(\"b\", 3);\n}\nfor ($i = 0; $i < 5; $i++) {\n    try {\n        foo()->{bar()} = str_repeat(\"a\", 3);\n    } catch (Throwable $e) {\n        echo $e->getMessage() . \"\\n\";\n    }\n}\n?>")).toMatchSnapshot();
  });
});
