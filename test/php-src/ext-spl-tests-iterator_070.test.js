// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/iterator_070.phpt
  it("SPL: RecursiveIteratorIterator - Ensure that non-overridden methods execute problem free.", function () {
    expect(parser.parseCode("<?php\n$array = array();\n$recArrIt = new RecursiveArrayIterator($array);\n$recItIt = new RecursiveIteratorIterator($recArrIt);\nvar_dump($recItIt->beginIteration());\nvar_dump($recItIt->endIteration());\nvar_dump($recItIt->nextElement());\n?>")).toMatchSnapshot();
  });
});
