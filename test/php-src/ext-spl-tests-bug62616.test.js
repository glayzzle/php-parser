// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug62616.phpt
  it("Bug #62616 (ArrayIterator::count() from IteratorIterator instance gives Segmentation fault)", function () {
    expect(parser.parseCode("<?php\n$ai = new ArrayIterator(array(0,1));\nvar_dump($ai->count());\n$ii = new IteratorIterator($ai);\nvar_dump($ii->count());\n?>")).toMatchSnapshot();
  });
});
