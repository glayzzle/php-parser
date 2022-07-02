// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug28444.phpt
  it("Bug #28444 (Cannot access undefined property for object with overloaded property access)", function () {
    expect(parser.parseCode("<?php\nclass ObjectOne\n{\n    public $x;\n    function __construct($x)\n    {\n        $this->x = $x;\n    }\n    function __toString() {\n        return \"Object\";\n    }\n}\nclass Overloaded\n{\n    public $props = array();\n    public $x;\n    function __construct($x)\n    {\n        $this->x = new ObjectOne($x);\n    }\n    function __get($prop)\n    {\n        echo __METHOD__ . \"($prop)\\n\";\n        return $this->props[$prop];\n    }\n    function __set($prop, $val)\n    {\n        echo __METHOD__ . \"($prop,$val)\\n\";\n        $this->props[$prop] = $val;\n    }\n}\n$y = new Overloaded(2);\nvar_dump($y->x);\nvar_dump($y->x->x);\nvar_dump($y->x->x = 3);\nvar_dump($y->y = 3);\nvar_dump($y->y);\nvar_dump($y->z = new ObjectOne(4));\nvar_dump($y->z->x);\n$t = $y->z;\nvar_dump($t->x = 5);\nvar_dump($y->z->x = 6);\n?>")).toMatchSnapshot();
  });
});
