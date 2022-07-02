// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/foreach_shadowed_dyn_property.phpt
  it("Dynamic property shadowed by private property", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    private $prop = \"Test\";\n    function run() {\n        foreach ($this as $k => $v) {\n            echo \"$k => $v\\n\";\n        }\n        var_dump(get_object_vars($this));\n    }\n}\nclass Test2 extends Test {\n}\n$test2 = new Test2;\n$test2->prop = \"Test2\";\n$test2->run();\n?>")).toMatchSnapshot();
  });
});
