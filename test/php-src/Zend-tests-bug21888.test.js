// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug21888.phpt
  it("Bug #21888 (protected property and protected method of the same name)", function () {
    expect(parser.parseCode("<?php\nclass mom {\n  protected $prot = \"protected property\\n\";\n  protected function prot() {\n    print \"protected method\\n\";\n  }\n}\nclass child extends mom {\n  public function callMom() {\n    $this->prot();\n  }\n  public function viewMom() {\n    print $this->prot;\n  }\n}\n$c = new child();\n$c->callMom();\n$c->viewMom();\n?>")).toMatchSnapshot();
  });
});
