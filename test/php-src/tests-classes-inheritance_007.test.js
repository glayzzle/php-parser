// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/inheritance_007.phpt
  it("Ensure private methods with the same name are not checked for inheritance rules - final", function () {
    expect(parser.parseCode("<?php\nclass A {\n    function callYourPrivates() {\n        $this->normalPrivate();\n        $this->finalPrivate();\n    }\n    function notOverridden_callYourPrivates() {\n        $this->normalPrivate();\n        $this->finalPrivate();\n    }\n    private function normalPrivate() {\n        echo __METHOD__ . PHP_EOL;\n    }\n    final private function finalPrivate() {\n        echo __METHOD__ . PHP_EOL;\n    }\n}\nclass B extends A {\n    function callYourPrivates() {\n        $this->normalPrivate();\n        $this->finalPrivate();\n    }\n    private function normalPrivate() {\n        echo __METHOD__ . PHP_EOL;\n    }\n    final private function finalPrivate() {\n        echo __METHOD__ . PHP_EOL;\n    }\n}\n$a = new A();\n$a->callYourPrivates();\n$a->notOverridden_callYourPrivates();\n$b = new B();\n$b->callYourPrivates();\n$b->notOverridden_callYourPrivates();\n?>")).toMatchSnapshot();
  });
});
