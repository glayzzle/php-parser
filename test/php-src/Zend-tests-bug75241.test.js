// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug75241.phpt
  it("Bug #75241 (Null pointer dereference in zend_mm_alloc_small())", function () {
    expect(parser.parseCode("<?php\n$d->d = &$d + $d->d/=0;\nvar_dump($d);\n?>")).toMatchSnapshot();
  });
});
