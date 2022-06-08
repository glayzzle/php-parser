// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/get_class_methods_001.phpt
  it("get_class_methods(): Testing scope", function () {
    expect(parser.parseCode("<?php\nabstract class X {\n    public function a() { }\n    private function b() { }\n    protected function c() { }\n}\nclass Y extends X {\n    private function bb() { }\n    static public function test() {\n        var_dump(get_class_methods('X'));\n        var_dump(get_class_methods('Y'));\n    }\n}\nvar_dump(get_class_methods('X'));\nvar_dump(get_class_methods('Y'));\nY::test();\n?>")).toMatchSnapshot();
  });
});
