// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/dtor_scope.phpt
  it("Scoping in destructor call", function () {
    expect(parser.parseCode("<?php\n        class T\n        {\n                private $var = array();\n                public function add($a)\n                {\n                        array_push($this->var, $a);\n                }\n                public function __destruct()\n                {\n                        print_r($this->var);\n                }\n        }\n        class TT extends T\n        {\n        }\n        $t = new TT();\n        $t->add(\"Hello\");\n        $t->add(\"World\");\n?>")).toMatchSnapshot();
  });
});
