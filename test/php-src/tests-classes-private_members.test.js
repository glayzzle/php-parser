// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/private_members.phpt
  it("ZE2 A private member is", function () {
    expect(parser.parseCode("<?php\nclass base\n{\n  private $member;\n  function __construct()\n  {\n    echo __METHOD__ . \"(begin)\\n\";\n    $this->member = 'base::member';\n    $this->test();\n    echo __METHOD__ . \"(end)\\n\";\n  }\n  function test()\n  {\n    echo __METHOD__ . \"\\n\";\n    print_r($this);\n  }\n}\nclass derived extends base\n{\n  public $member = 'derived::member (default)';\n  function __construct()\n  {\n    echo __METHOD__ . \"(begin)\\n\";\n    parent::__construct();\n    parent::test();\n    $this->test();\n    $this->member = 'derived::member';\n    echo __METHOD__ . \"(end)\\n\";\n  }\n  function test()\n  {\n    parent::test();\n    echo __METHOD__ . \"\\n\";\n    print_r($this);\n  }\n}\n$t = new derived;\n$t->test();\nunset($t);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
