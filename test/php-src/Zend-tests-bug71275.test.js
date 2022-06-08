// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug71275.phpt
  it("Bug #71275 (Bad method called on cloning an object having a trait)", function () {
    expect(parser.parseCode("<?php\ntrait MyTrait {\n    public function _() {\n        throw new RuntimeException('Should not be called');\n    }\n}\nclass MyClass {\n    use MyTrait;\n    public function __clone() {\n        echo \"I'm working hard to clone\";\n    }\n}\n$instance = new MyClass();\nclone $instance;\n?>")).toMatchSnapshot();
  });
});
