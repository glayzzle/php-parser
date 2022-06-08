// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug74340.phpt
  it("Bug #74340: Magic function __get has different behavior in php 7.1.x", function () {
    expect(parser.parseCode("<?php\nclass Test\n{\n    public function __get($var)\n    {\n        static $first = true;\n        echo '__get '.$var.PHP_EOL;\n        if ($first) {\n            $first = false;\n            $this->$var;\n            $this->{$var.'2'};\n            $this->$var;\n        }\n    }\n}\n$test = new Test;\n$test->test;\n?>")).toMatchSnapshot();
  });
});
