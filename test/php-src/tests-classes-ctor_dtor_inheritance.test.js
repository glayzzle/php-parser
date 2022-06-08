// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/ctor_dtor_inheritance.phpt
  it("ZE2 A derived class can use the inherited constructor/destructor", function () {
    expect(parser.parseCode("<?php\n// This test checks for:\n// - inherited constructors/destructors are not called automatically\n// - base classes know about derived properties in constructor/destructor\n// - base class constructors/destructors know the instantiated class name\nclass base {\n    public $name;\n    function __construct() {\n        echo __CLASS__ . \"::\" . __FUNCTION__ . \"\\n\";\n        $this->name = 'base';\n        print_r($this);\n    }\n    function __destruct() {\n        echo __CLASS__ . \"::\" . __FUNCTION__ . \"\\n\";\n        print_r($this);\n    }\n}\nclass derived extends base {\n    public $other;\n    function __construct() {\n        $this->name = 'init';\n        $this->other = 'other';\n        print_r($this);\n        parent::__construct();\n        echo __CLASS__ . \"::\" . __FUNCTION__ . \"\\n\";\n        $this->name = 'derived';\n        print_r($this);\n    }\n    function __destruct() {\n        parent::__destruct();\n        echo __CLASS__ . \"::\" . __FUNCTION__ . \"\\n\";\n        print_r($this);\n    }\n}\necho \"Testing class base\\n\";\n$t = new base();\nunset($t);\necho \"Testing class derived\\n\";\n$t = new derived();\nunset($t);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
