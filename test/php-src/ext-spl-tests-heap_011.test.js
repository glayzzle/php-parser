// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/heap_011.phpt
  it("SPL: SplHeap with overridden compare()", function () {
    expect(parser.parseCode("<?php\nclass SplMinHeap2 extends SplMinHeap {\n    public function compare($a, $b): int {\n        return -parent::compare($a,$b);\n    }\n}\n$h = new SplMinHeap2();\n$h->insert(1);\n$h->insert(6);\n$h->insert(5);\n$h->insert(2);\nvar_dump($h->top());\nclass SplMaxHeap2 extends SplMaxHeap {\n    public function compare($a, $b): int {\n        return -parent::compare($a,$b);\n    }\n}\n$h = new SplMaxHeap2();\n$h->insert(1);\n$h->insert(6);\n$h->insert(5);\n$h->insert(2);\nvar_dump($h->top());\n?>")).toMatchSnapshot();
  });
});
