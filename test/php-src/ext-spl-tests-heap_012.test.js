// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/heap_012.phpt
  it("SPL: SplHeap recursive var_dump", function () {
    expect(parser.parseCode("<?php\n$a = new SplMaxHeap;\n$a->insert($a);\nvar_dump($a)\n?>")).toMatchSnapshot();
  });
});
