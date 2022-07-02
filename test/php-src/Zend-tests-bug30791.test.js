// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug30791.phpt
  it("Bug #30791 (magic methods (__sleep/__wakeup/__toString) call __call if object is overloaded)", function () {
    expect(parser.parseCode("<?php\nclass a\n{\n    public $a = 4;\n    function __call($name, $args) {\n        echo __METHOD__, \"\\n\";\n    }\n}\n$b = new a;\nvar_dump($b);\n$c = unserialize(serialize($b));\nvar_dump($c);\n?>")).toMatchSnapshot();
  });
});
