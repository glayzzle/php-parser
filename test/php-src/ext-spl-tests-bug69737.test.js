// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug69737.phpt
  it("Bug #69737 (Segfault when SplMinHeap::compare produces fatal error)", function () {
    expect(parser.parseCode("<?php\nclass SplMinHeap1 extends SplMinHeap {\n  public function compare($a, $b): int {\n    return -parent::notexist($a, $b);\n  }\n}\n$h = new SplMinHeap1();\n$h->insert(1);\n$h->insert(6);\n?>\n===DONE===")).toMatchSnapshot();
  });
});
