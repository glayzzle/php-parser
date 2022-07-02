// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/named_params/attributes.phpt
  it("Named params in attributes", function () {
    expect(parser.parseCode("<?php\n#[Attribute]\nclass MyAttribute {\n    public function __construct(\n        public $a = 'a',\n        public $b = 'b',\n        public $c = 'c',\n    ) {}\n}\n#[MyAttribute('A', c: 'C')]\nclass Test1 {}\n#[MyAttribute('A', a: 'C')]\nclass Test2 {}\n$attr = (new ReflectionClass(Test1::class))->getAttributes()[0];\nvar_dump($attr->getName());\nvar_dump($attr->getArguments());\nvar_dump($attr->newInstance());\n$attr = (new ReflectionClass(Test2::class))->getAttributes()[0];\ntry {\n    var_dump($attr->newInstance());\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
