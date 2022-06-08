// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug65108.phpt
  it("Bug #65108 (is_callable() triggers Fatal Error)", function () {
    expect(parser.parseCode("<?php\nclass C {\n    private function f() {}\n    static function __callStatic($name, $args) {}\n}\nclass B {\n    public function __construct() {\n        $isCallable = is_callable(array(new C, 'f'));\n        var_dump($isCallable);\n    }\n}\nnew B();\nClass E {\n   private function f() {}\n   function __call($name, $args) {}\n}\n$isCallable = is_callable(array('E', 'f'));\nvar_dump($isCallable);\n?>")).toMatchSnapshot();
  });
});
