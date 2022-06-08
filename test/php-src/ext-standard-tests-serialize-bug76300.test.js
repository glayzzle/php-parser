// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/bug76300.phpt
  it("Bug #76300: Unserialize of extended protected member broken", function () {
    expect(parser.parseCode("<?php\nclass Base {\n    private $id;\n    public function __construct($id)\n    {\n        $this->id = $id;\n    }\n}\nclass Derived extends Base {\n    protected $id;\n    public function __construct($id)\n    {\n        parent::__construct($id + 20);\n        $this->id = $id;\n    }\n}\n$a = new Derived(44);\n$s = serialize($a);\n$u = unserialize($s);\nprint_r($u);\n?>")).toMatchSnapshot();
  });
});
