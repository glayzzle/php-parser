// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/SplHeap_isEmpty.phpt
  it("Check that SplHeap::isEmpty standard success test", function () {
    expect(parser.parseCode("<?php\n$h = new SplMaxHeap();\nvar_dump($h->isEmpty());\n?>")).toMatchSnapshot();
  });
});
