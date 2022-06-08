// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug36759.phpt
  it("Bug #36759 (Objects destructors are invoked in wrong order when script is finished)", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n  private $bar;\n  function __construct($bar) {\n    $this->bar = $bar;\n  }\n  function __destruct() {\n    echo __METHOD__,\"\\n\";\n    unset($this->bar);\n  }\n}\nclass Bar {\n  function __destruct() {\n    echo __METHOD__,\"\\n\";\n    unset($this->bar);\n  }\n}\n$y = new Bar();\n$x = new Foo($y);\n?>")).toMatchSnapshot();
  });
});
