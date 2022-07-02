// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug78898.phpt
  it("Bug #78898: call_user_func(['parent', ...]) fails while other succeed", function () {
    expect(parser.parseCode("<?php\nclass A\n{\n    protected function _x()\n    {\n        echo \"a\";\n    }\n    public function __call($methodName, array $arguments)\n    {\n        throw new Exception(\"Unknown method.\");\n    }\n}\nclass B extends A\n{\n    public function x()\n    {\n        parent::_x();\n        call_user_func('parent::_x');\n        call_user_func(['parent', '_x']);\n    }\n}\n$b = new B;\n$b->x();\n?>")).toMatchSnapshot();
  });
});
