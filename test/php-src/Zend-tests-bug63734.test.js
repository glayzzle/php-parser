// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug63734.phpt
  it("Bug #63734 (Garbage collector can free zvals that are still referenced)", function () {
    expect(parser.parseCode("<?php\nclass C {\n    public $ref;\n    public $ary;\n    public function __construct() {\n        $this->ref = $this;\n        $this->ary[] = 42;\n    }\n    public function __destruct() {\n        global $ary;\n        $ary[] = $this->ary[0];\n    }\n}\n$c = new C;\nunset($c);\ngc_collect_cycles();\nvar_dump($ary);\n?>")).toMatchSnapshot();
  });
});
