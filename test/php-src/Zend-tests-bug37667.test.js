// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug37667.phpt
  it("Bug #37667 (Object is not added into array returned by __get)", function () {
    expect(parser.parseCode("<?php\nclass Test\n{\n    protected $property = array('foo' => 'bar');\n    function __get($name)\n    {\n        return $this->property;\n    }\n}\n$obj = new Test;\nvar_dump($obj->property['foo']);\nvar_dump($obj->property[2]);\nvar_dump($obj);\n$obj->property[] = 1;\n$obj->property[] = 2;\nvar_dump($obj);\n?>")).toMatchSnapshot();
  });
});
