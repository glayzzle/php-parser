// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zend_test/tests/observer_magic_01.phpt
  it("Observer: Basic magic method observability", function () {
    expect(parser.parseCode("<?php\nclass MagicTest\n{\n    public function __call($name, $args)\n    {\n        echo '__call()' . PHP_EOL;\n        $this->foo($name);\n    }\n    public function foo($name)\n    {\n        echo $name . PHP_EOL;\n    }\n}\n$test = new MagicTest();\n$test->foo('test');\n$test->bar();\necho 'DONE' . PHP_EOL;\n?>")).toMatchSnapshot();
  });
});
