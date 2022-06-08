// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/bug28325.phpt
  it("Bug #28325 (Problem in serialisation of circular references)", function () {
    expect(parser.parseCode("<?php\nclass a {\n    public $b;\n}\nclass b {\n    public $c;\n}\nclass c {\n    public $d;\n}\n$a = new a();\n$a->b = new b();\n$a->b->c = new c();\n$a->b->c->d = $a;\nvar_dump(unserialize(serialize($a)));\n?>")).toMatchSnapshot();
  });
});
