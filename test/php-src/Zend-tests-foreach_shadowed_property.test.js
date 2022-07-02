// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/foreach_shadowed_property.phpt
  it("Foreach over object with shadowed private property", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    private $prop = \"Test\";\n    function run() {\n        foreach ($this as $k => $v) {\n            echo \"$k => $v\\n\";\n        }\n        var_dump(get_object_vars($this));\n    }\n}\nclass Test2 extends Test {\n    public $prop = \"Test2\";\n}\n(new Test2)->run();\n?>")).toMatchSnapshot();
  });
});
