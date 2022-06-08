// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug47054.phpt
  it("Bug #47054 (BC break in static functions called as dynamic)", function () {
    expect(parser.parseCode("<?php\nclass C {\n  final static function s() {\n    print \"Called class: \" . get_called_class() . \"\\n\";\n  }\n}\nclass D extends C {\n  public function m() {\n    $this->s();\n  }\n}\n$d = new D();\n$d->m();\nC::s();\n$c = new C();\n$c->s();\n?>")).toMatchSnapshot();
  });
});
