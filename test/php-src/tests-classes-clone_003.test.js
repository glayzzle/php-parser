// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/clone_003.phpt
  it("ZE2 object cloning, 3", function () {
    expect(parser.parseCode("<?php\nclass base {\n    protected $p1 = 'base:1';\n    public $p2 = 'base:2';\n    public $p3 = 'base:3';\n    public $p4 = 'base:4';\n    public $p5 = 'base:5';\n    private $p6 = 'base:6';\n    public function __clone() {\n    }\n};\nclass test extends base {\n    public $p1 = 'test:1';\n    public $p3 = 'test:3';\n    public $p4 = 'test:4';\n    public $p5 = 'test:5';\n    public function __clone() {\n        $this->p5 = 'clone:5';\n    }\n}\n$obj = new test;\n$obj->p4 = 'A';\n$copy = clone $obj;\necho \"Object\\n\";\nprint_r($obj);\necho \"Clown\\n\";\nprint_r($copy);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
