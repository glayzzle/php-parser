// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug20240.phpt
  it("Bug #20240 (order of destructor calls)", function () {
    expect(parser.parseCode("<?php\nclass test\n{\n    public $member;\n    function __construct() {\n        $this->member = 1;\n        register_shutdown_function(array($this, 'destructor'));\n    }\n    function destructor() {\n        print __METHOD__ . \"\\n\";\n    }\n    function __destruct() {\n        print __METHOD__ . \"\\n\";\n    }\n    function add() {\n        $this->member += 1;\n        print $this->member.\"\\n\";\n    }\n}\n$t = new test();\n$t->add();\n$t->add();\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
