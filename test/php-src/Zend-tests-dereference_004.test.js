// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/dereference_004.phpt
  it("Testing array dereference on __invoke() result", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL);\nclass foo {\n    public $x = array();\n    public function __construct() {\n        $h = array();\n        $h[] = new stdclass;\n        $this->x = $h;\n    }\n    public function __invoke() {\n        return $this->x;\n    }\n}\n$fo = new foo;\nvar_dump($fo()[0]);\n?>")).toMatchSnapshot();
  });
});
