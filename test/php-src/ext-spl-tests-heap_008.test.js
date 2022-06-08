// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/heap_008.phpt
  it("SPL: SplHeap: var_dump", function () {
    expect(parser.parseCode("<?php\n$h = new SplMaxHeap();\n$h->insert(1);\n$h->insert(5);\n$h->insert(0);\n$h->insert(4);\nvar_dump($h);\n?>")).toMatchSnapshot();
  });
});
