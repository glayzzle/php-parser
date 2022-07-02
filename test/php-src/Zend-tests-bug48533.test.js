// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug48533.phpt
  it("Bug #48533 (__callStatic is not invoked for private/protected methods)", function () {
    expect(parser.parseCode("<?php\nclass foo {\n    private function a() {\n        var_dump(1);\n    }\n    public function b() {\n        var_dump(2);\n    }\n    protected function c() {\n        var_dump(3);\n    }\n    static function __callstatic($a, $b) {\n        var_dump('__callStatic::'. $a);\n    }\n    public function __call($a, $b) {\n        var_dump('__call::'. $a);\n    }\n}\n$x = new foo;\n$x->a();\n$x->b();\n$x->c();\n$x::a();\n$x::c();\n$x::b();\n?>")).toMatchSnapshot();
  });
});
