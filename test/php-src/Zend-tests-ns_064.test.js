// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ns_064.phpt
  it("Magic methods in overridden stdClass inside namespace", function () {
    expect(parser.parseCode("<?php\nnamespace test;\nclass foo {\n    public $e = array();\n    public function __construct() {\n        $this->e[] = $this;\n    }\n    public function __set($a, $b) {\n        var_dump($a, $b);\n    }\n    public function __get($a) {\n        var_dump($a);\n        return $this;\n    }\n}\nuse test\\foo as stdClass;\n$x = new stdClass;\n$x->a = 1;\n$x->b->c = 1;\n$x->d->e[0]->f = 2;\n?>")).toMatchSnapshot();
  });
});
