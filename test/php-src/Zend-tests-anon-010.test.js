// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/anon/010.phpt
  it("Trait binding after anon class", function () {
    expect(parser.parseCode("<?php\ntrait T {\n    public function m1() { return 42; }\n}\nclass C {\n    public function m2() {\n        return new class {};\n    }\n    use T;\n}\n$c = new C;\nvar_dump($c->m1());\n?>")).toMatchSnapshot();
  });
});
