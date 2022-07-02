// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/class_object/method_exists_basic_001.phpt
  it("method_exists() on userspace classes; static & non-static methods with various visibilities.", function () {
    expect(parser.parseCode("<?php\nClass B {\n    public function inherit_pub() {}\n    protected function inherit_prot() {}\n    private function inherit_priv() {}\n    static public function inherit_static_pub() {}\n    static protected function inherit_static_prot() {}\n    static private function inherit_static_priv() {}\n}\nClass C extends B {\n    public function pub() {}\n    protected function prot() {}\n    private function priv() {}\n    static public function static_pub() {}\n    static protected function static_prot() {}\n    static private function static_priv() {}\n}\n$methods = array(\n    'inherit_pub', 'inherit_prot', 'inherit_priv',\n    'inherit_static_pub', 'inherit_static_prot', 'inherit_static_priv',\n    'pub', 'prot', 'priv',\n    'static_pub', 'static_prot', 'static_priv',\n    'non_existent');\necho \"\\n ---(Using string class name)---\\n\";\nforeach ($methods as $method) {\n  echo \"Does C::$method exist? \";\n  var_dump(method_exists(\"C\", $method));\n}\necho \"\\n ---(Using object)---\\n\";\n$myC = new C;\nforeach ($methods as $method) {\n  echo \"Does C::$method exist? \";\n  var_dump(method_exists($myC, $method));\n}\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
