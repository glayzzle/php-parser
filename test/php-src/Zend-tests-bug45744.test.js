// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug45744.phpt
  it("Bug #45744 (Case sensitive callback behaviour)", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    public function __construct(array $data) {\n        var_dump(array_map(array($this, 'callback'), $data));\n    }\n    private function callback($value) {\n        if (!is_array($value)) {\n            return stripslashes($value);\n        }\n    return array_map(array($this, 'callback'), $value);\n    }\n}\nclass Bar extends Foo {\n}\nnew Bar(array());\nclass Foo2 {\n    public function __construct(array $data) {\n        var_dump(array_map(array($this, 'callBack'), $data));\n    }\n    private function callBack($value) {\n    }\n}\nclass Bar2 extends Foo2 {\n}\nnew Bar2(array());\n?>")).toMatchSnapshot();
  });
});
