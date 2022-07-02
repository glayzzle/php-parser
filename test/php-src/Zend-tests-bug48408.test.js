// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug48408.phpt
  it("Bug #48408 (crash when exception is thrown while passing function arguments)", function () {
    expect(parser.parseCode("<?php\nclass B{\n    public function process($x){\n        return $x;\n    }\n}\nclass C{\n    public function generate($x){\n        throw new Exception;\n    }\n}\n$b = new B;\n$c = new C;\ntry{\n    $b->process($c->generate(0));\n}\ncatch(Exception $e){\n    $c->generate(0);\n}\n?>")).toMatchSnapshot();
  });
});
