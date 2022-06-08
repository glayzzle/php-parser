// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/class_object/get_class_methods_basic_003.phpt
  it("Test get_class_methods() function : basic functionality", function () {
    expect(parser.parseCode("<?php\n/*\n * Test behaviour with interfaces.\n */\ninterface I {\n    public function pubI();\n}\nclass C implements I {\n    public function pubI() {}\n    private function privC() {}\n    protected function protC() {}\n    public function pubC() {}\n    public static function testFromC() {\n        echo \"Accessing I from C:\\n\";\n        var_dump(get_class_methods(\"I\"));\n        echo \"Accessing C from C:\\n\";\n        var_dump(get_class_methods(\"C\"));\n    }\n}\necho \"Accessing I from global scope:\\n\";\nvar_dump(get_class_methods(\"I\"));\necho \"Accessing C from global scope:\\n\";\nvar_dump(get_class_methods(\"C\"));\nC::testFromC();\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
