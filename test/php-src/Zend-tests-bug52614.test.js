// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug52614.phpt
  it("Bug #52614 (Memory leak when writing on uninitialized variable returned from method call)", function () {
    expect(parser.parseCode("<?php\nclass foo {\n    public $a1;\n    public $a2 = array();\n    public $a3;\n    public $o1;\n    public $o2;\n    public function f1() {\n        return $this->a1;\n    }\n    public function f2() {\n        return $this->a2;\n    }\n    public function f3() {\n        $this->a3 = array();\n        return $this->a3;\n    }\n    public function f4() {\n        return $this->o1;\n    }\n    public function f5() {\n        $this->o2 = new stdClass;\n        return $this->o2;\n    }\n    public function &f6() {\n        return $this->a1;\n    }\n    public function f7(&$x) {\n        $x = 2;\n    }\n}\n$foo = new foo;\n$foo->f1()[0] = 1;\nvar_dump($foo->a1);\n$foo->f2()[0] = 1;\nvar_dump($foo->a2);\n$foo->f3()[0] = 1;\nvar_dump($foo->a3);\ntry {\n    $foo->f4()->a = 1;\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nvar_dump($foo->o1);\n$foo->f5()->a = 1;\nvar_dump($foo->o2);\n$foo->a1[0] = 1;\n$foo->f7($foo->f6()[0]);\nvar_dump($foo->a1[0]);\n$foo->f1()[0]++;\nvar_dump($foo->a1[0]);\n$foo->f6()[0]++;\nvar_dump($foo->a1[0]);\n?>")).toMatchSnapshot();
  });
});
