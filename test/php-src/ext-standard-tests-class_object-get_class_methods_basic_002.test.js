// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/class_object/get_class_methods_basic_002.phpt
  it("Test get_class_methods() function : basic functionality", function () {
    expect(parser.parseCode("<?php\n/*\n * Test behaviour with various visibility levels.\n */\nclass C {\n    private function privC() {}\n    protected function protC() {}\n    public function pubC() {}\n    public static function testFromC() {\n        echo \"Accessing C from C:\\n\";\n        var_dump(get_class_methods(\"C\"));\n        echo \"Accessing D from C:\\n\";\n        var_dump(get_class_methods(\"D\"));\n        echo \"Accessing X from C:\\n\";\n        var_dump(get_class_methods(\"X\"));\n    }\n}\nclass D extends C {\n    private function privD() {}\n    protected function protD() {}\n    public function pubD() {}\n    public static function testFromD() {\n        echo \"Accessing C from D:\\n\";\n        var_dump(get_class_methods(\"C\"));\n        echo \"Accessing D from D:\\n\";\n        var_dump(get_class_methods(\"D\"));\n        echo \"Accessing X from D:\\n\";\n        var_dump(get_class_methods(\"X\"));\n    }\n}\nclass X {\n    private function privX() {}\n    protected function protX() {}\n    public function pubX() {}\n    public static function testFromX() {\n        echo \"Accessing C from X:\\n\";\n        var_dump(get_class_methods(\"C\"));\n        echo \"Accessing D from X:\\n\";\n        var_dump(get_class_methods(\"D\"));\n        echo \"Accessing X from X:\\n\";\n        var_dump(get_class_methods(\"X\"));\n    }\n}\necho \"Accessing D from global scope:\\n\";\nvar_dump(get_class_methods(\"D\"));\nC::testFromC();\nD::testFromD();\nX::testFromX();\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
