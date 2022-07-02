// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/get_class_methods_003.phpt
  it("get_class_methods(): Testing scope", function () {
    expect(parser.parseCode("<?php\ninterface I {\n    function aa();\n    function bb();\n    static function cc();\n}\nclass X {\n    public function a() { }\n    protected function b() { }\n    private function c() { }\n    static public function static_a() { }\n    static protected function static_b() { }\n    static private function static_c() { }\n}\nclass Y extends X implements I {\n    public function aa() { }\n    public function bb() { }\n    static function cc() { }\n    public function __construct() {\n        var_dump(get_class_methods('I'));\n        var_dump(get_class_methods('Y'));\n        var_dump(get_class_methods('X'));\n    }\n    public function __destruct() { }\n}\nnew Y;\n?>")).toMatchSnapshot();
  });
});
