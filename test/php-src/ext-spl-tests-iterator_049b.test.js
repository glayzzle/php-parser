// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/iterator_049b.phpt
  it("SPL: ArrayIterator with NULL key", function () {
    expect(parser.parseCode("<?php\n$ar = new ArrayIterator(array(\n    NULL=>1,\n    \"\\0\"=>2,\n    \"\\0\\0\"=>3,\n    \"\\0\\0\\0\"=>4,\n    \"\\0*\"=>5,\n    \"\\0*\\0\"=>6,\n    ));\n@var_dump($ar);\nvar_dump($ar->getArrayCopy());\n?>")).toMatchSnapshot();
  });
});
