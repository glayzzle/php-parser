// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/static_type_trait.phpt
  it("static type in trait", function () {
    expect(parser.parseCode("<?php\ntrait T {\n    public function test($arg): static {\n        return $arg;\n    }\n}\nclass C {\n    use T;\n}\nclass P extends C {\n}\n$c = new C;\n$p = new P;\nvar_dump($c->test($c));\nvar_dump($c->test($p));\nvar_dump($p->test($p));\nvar_dump($p->test($c));\n?>")).toMatchSnapshot();
  });
});
