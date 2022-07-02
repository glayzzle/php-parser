// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug78776.phpt
  it("Bug #78776: Abstract method implementation from trait does not check \"static\"", function () {
    expect(parser.parseCode("<?php\nabstract class A\n{\n    abstract public function createApp();\n}\nclass B extends A\n{\n    use C;\n}\ntrait C\n{\n    public static function createApp()\n    {\n        echo \"You should not be here\\n\";\n    }\n}\nB::createApp();\n?>")).toMatchSnapshot();
  });
});
