// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/typed_properties_047.phpt
  it("Nullable typed property", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    public ?int $foo = null;\n}\n$x = new Foo();\nvar_dump($x);\nvar_dump($x->foo);\n$x->foo = 5;\nvar_dump($x->foo);\n$x->foo = null;\nvar_dump($x->foo);\nunset($x->foo);\ntry {\n    var_dump($x->foo);\n} catch (Throwable $e) {\n    echo $e->getMessage().\"\\n\";\n}\ntry {\n    $x->foo = \"ops\";\n} catch (Throwable $e) {\n    echo $e->getMessage().\"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
