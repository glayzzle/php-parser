// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug78379.phpt
  it("Bug #78379 (Cast to object confuses GC, causes crash)", function () {
    expect(parser.parseCode("<?php\nclass C {\n    public function __construct() {\n        $this->p = (object)[\"x\" => [1]];\n    }\n}\nclass E {\n}\n$e = new E;\n$e->f = new E;\n$e->f->e = $e;\n$e->a = new C;\n$e = null;\ngc_collect_cycles();\nvar_dump(new C);\n?>")).toMatchSnapshot();
  });
});
