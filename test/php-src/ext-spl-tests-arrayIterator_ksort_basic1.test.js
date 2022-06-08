// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/arrayIterator_ksort_basic1.phpt
  it("Bug #79653: Unexpected error for ArrayIterator::ksort()", function () {
    expect(parser.parseCode("<?php\n$array = [3 => 1, 2 => 2, 1 => 3];\n$arrIter = new ArrayIterator($array);\nvar_dump($arrIter->ksort());\nvar_dump($arrIter);\n?>")).toMatchSnapshot();
  });
});
