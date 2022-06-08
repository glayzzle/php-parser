// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/objects_027.phpt
  it("Testing 'new static;' calling parent method", function () {
    expect(parser.parseCode("<?php\nclass bar {\n    public function show() {\n        var_dump(new static);\n    }\n}\nclass foo extends bar {\n    public function test() {\n        parent::show();\n    }\n}\n$foo = new foo;\n$foo->test();\ncall_user_func(array($foo, 'test'));\n?>")).toMatchSnapshot();
  });
});
