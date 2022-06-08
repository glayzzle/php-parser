// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/iterator_049.phpt
  it("SPL: ArrayIterator with NULL key", function () {
    expect(parser.parseCode("<?php\n$ar = new ArrayIterator(array(NULL=>NULL));\n@var_dump($ar);\nvar_dump($ar->getArrayCopy());\n?>")).toMatchSnapshot();
  });
});
