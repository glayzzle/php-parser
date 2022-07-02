// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug26817.phpt
  it("Bug #26817 (http_build_query() did not handle private & protected object properties)", function () {
    expect(parser.parseCode("<?php\nclass test {\n    protected $foo;\n    private $bar;\n    public $test;\n    function foo()\n    {\n        $this->bar = 'meuh';\n        $this->foo = 'lala';\n        $this->test = 'test';\n        var_dump(http_build_query($this));\n    }\n}\n$obj = new test();\n$obj->foo();\nvar_dump(http_build_query($obj));\n?>")).toMatchSnapshot();
  });
});
