// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug78379_2.phpt
  it("Bug #78379.2 (Cast to object confuses GC, causes crash)", function () {
    expect(parser.parseCode("<?php\nclass E {}\nfunction f() {\n    $e1 = new E;\n    $e2 = new E;\n    $a = ['e2' => $e2];\n    $e1->a = (object)$a;\n    $e2->e1 = $e1;\n    $e2->a = (object)$a;\n}\nf();\ngc_collect_cycles();\necho \"End\\n\";\n?>")).toMatchSnapshot();
  });
});
