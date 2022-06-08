// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug47343.phpt
  it("Bug #47343 (gc_collect_cycles causes a segfault when called within a destructor in one case)", function () {
    expect(parser.parseCode("<?php\nclass A\n{\n    public function __destruct()\n    {\n        gc_collect_cycles();\n    }\n    public function getB()\n    {\n        $this->data['foo'] = new B($this);\n        $this->data['bar'] = new B($this);\n        // Return either of the above\n        return $this->data['foo'];\n    }\n}\nclass B\n{\n    public function __construct($A)\n    {\n        $this->A = $A;\n    }\n    public function __destruct()\n    {\n    }\n}\nfor ($i = 0; $i < 2; $i++)\n{\n    $Aobj = new A;\n    $Bobj = $Aobj->getB();\n    unset($Bobj);\n    unset($Aobj);\n}\necho \"DONE\\n\";\n?>")).toMatchSnapshot();
  });
});
