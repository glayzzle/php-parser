// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug48899.phpt
  it("Bug #48899 (is_callable returns true even if method does not exist in parent class)", function () {
    expect(parser.parseCode("<?php\nclass ParentClass { }\nclass ChildClass extends ParentClass {\n    public function testIsCallable() {\n        var_dump(is_callable(array($this, 'parent::testIsCallable')));\n    }\n    public function testIsCallable2() {\n        var_dump(is_callable(array($this, 'static::testIsCallable2')));\n    }\n}\n$child = new ChildClass();\n$child->testIsCallable();\n$child->testIsCallable2();\n?>")).toMatchSnapshot();
  });
});
