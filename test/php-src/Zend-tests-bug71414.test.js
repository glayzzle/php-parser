// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug71414.phpt
  it("Bug #71414 (Interface method override inherited method and implemented in a trait causes fatal error)", function () {
    expect(parser.parseCode("<?php\ninterface InterfaceY {\n    public function z(): string;\n}\ntrait TraitY {\n    public function z(): string {\n    }\n}\nclass X {\n    public function z() {\n    }\n}\nclass Y extends X implements InterfaceY {\n    use TraitY;\n}\necho \"ok\";\n?>")).toMatchSnapshot();
  });
});
