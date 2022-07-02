// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/list/list_reference_005.phpt
  it("\"Reference Unpacking - Class Property and Methods\" list()", function () {
    expect(parser.parseCode("<?php\nclass A {\n    public $a = [['hello']];\n    public $b = ['world'];\n    public function getVar() {\n        return $this->a;\n    }\n    public function &getVarRef() {\n        return $this->a;\n    }\n}\nclass B {\n    static $a = [['world']];\n}\n$a = new A();\n[&$var] = $a->a;\n[&$var_too] = $a->b;\nvar_dump($a->a);\nvar_dump($a->b);\n$a = new A();\n[&$var] = $a->getVar();\nvar_dump($a->a);\n$a = new A();\n[&$var] = $a->getVarRef();\nvar_dump($a->a);\n[&$var] = B::$a;\nvar_dump(B::$a);\n?>")).toMatchSnapshot();
  });
});
