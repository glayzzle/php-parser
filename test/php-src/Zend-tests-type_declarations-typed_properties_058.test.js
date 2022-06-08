// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/typed_properties_058.phpt
  it("Constants in default values of properties", function () {
    expect(parser.parseCode("<?php\ndeclare(strict_types=1);\ndefine(\"FOO\", 5);\nclass A {\n    public int $foo = FOO;\n}\nclass B {\n    public string $foo = FOO;\n}\n$o = new A();\nvar_dump($o->foo);\nfor ($i = 0; $i < 2; $i++) {\n    try {\n        $o = new B();\n        var_dump($o->foo);\n    } catch (Throwable $e) {\n        echo $e->getMessage() . \"\\n\";\n    }\n}\n?>")).toMatchSnapshot();
  });
});
