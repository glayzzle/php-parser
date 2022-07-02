// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/access_modifiers_012.phpt
  it("Trigger __call() in lieu of non visible methods when called via a callback.", function () {
    expect(parser.parseCode("<?php\nclass C {\n    protected function prot() { }\n    private function priv() { }\n    public function __call($name, $args)    {\n        echo \"In __call() for method $name()\\n\";\n    }\n}\n$c = new C;\ncall_user_func(array($c, 'none'));\ncall_user_func(array($c, 'prot'));\ncall_user_func(array($c, 'priv'));\n?>")).toMatchSnapshot();
  });
});
