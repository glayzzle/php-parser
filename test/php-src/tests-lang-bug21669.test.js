// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/bug21669.phpt
  it("Bug #21669 (\"$obj = new $this->var;\" doesn't work)", function () {
    expect(() => parser.parseCode("<?php\nclass Test {\n    function say_hello() {\n        echo \"Hello world\";\n    }\n}\nclass Factory {\n    public $name = \"Test\";\n    function create() {\n        $obj = new $this->name; /* Parse error */\n        return $obj;\n    }\n}\n$factory = new Factory;\n$test = $factory->create();\n$test->say_hello();\n?>")).toThrowErrorMatchingSnapshot();
  });
});
