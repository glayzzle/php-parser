// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/bug55424.phpt
  it("Bug #55424 (Method got missing from class when a trait defined an abstract method to express a requirement)", function () {
    expect(parser.parseCode("<?php\n    trait ATrait\n    {\n        function setRequired()\n        {\n            $this->setAttribute();\n        }\n        abstract function setAttribute();\n    }\n    class Base\n    {\n        function setAttribute() { }\n    }\n    class MyClass extends Base\n    {\n        use ATrait;\n    }\n    $i = new Base();\n    $i->setAttribute();\n    $t = new MyClass();\n    /* setAttribute used to disappear for no good reason. */\n    $t->setRequired();\n    echo 'DONE';\n?>")).toMatchSnapshot();
  });
});
