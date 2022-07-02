// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/typed_properties_020.phpt
  it("Test typed properties binary assign op helper test", function () {
    expect(parser.parseCode("<?php\ndeclare(strict_types=1);\nclass Foo {\n    public int $bar = 0;\n    public function __construct() {\n        $this->bar += 2;\n        try {\n            $this->bar += 1.5;\n        } catch (TypeError $e) {\n            echo $e->getMessage(), \"\\n\";\n        }\n    }\n}\n$foo = new Foo();\nvar_dump($foo->bar);\n?>")).toMatchSnapshot();
  });
});
