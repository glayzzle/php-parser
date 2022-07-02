// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/generator_trampoline.phpt
  it("Calling generator through magic __call()", function () {
    expect(parser.parseCode("<?php\nclass A {\n    public function __call($name, $args) {\n        for ($i = 0; $i < 5; $i++) {\n            yield $i;\n        }\n    }\n}\n$a = new A();\nforeach ($a->gen() as $n) {\n    var_dump($n);\n}\n$a->gen();\n?>")).toMatchSnapshot();
  });
});
