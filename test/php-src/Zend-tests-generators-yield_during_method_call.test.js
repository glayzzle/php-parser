// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/yield_during_method_call.phpt
  it("Yield can be used during a method call", function () {
    expect(parser.parseCode("<?php\nclass A {\n    public function b($c) {\n        echo $c, \"\\n\";\n    }\n}\nfunction gen() {\n    $a = new A;\n    $a->b(yield);\n}\n$gen = gen();\n$gen->send('foo');\n// test resource cleanup\n$gen = gen();\n$gen->rewind();\nunset($gen);\n?>")).toMatchSnapshot();
  });
});
