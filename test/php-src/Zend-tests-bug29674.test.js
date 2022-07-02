// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug29674.phpt
  it("Bug #29674 (inherited method doesn't have access to private variables of the derived class)", function () {
    expect(parser.parseCode("<?php\nclass BaseClass\n{\n    private $private_base = \"Base\";\n    function printVars ()\n    {\n        var_dump($this->private_base);\n        var_dump($this->private_child);\n    }\n}\nclass ChildClass extends BaseClass\n{\n    private $private_child = \"Child\";\n}\necho \"===BASE===\\n\";\n$obj = new BaseClass;\n$obj->printVars();\necho \"===CHILD===\\n\";\n$obj = new ChildClass;\n$obj->printVars();\n?>\n===DONE===")).toMatchSnapshot();
  });
});
