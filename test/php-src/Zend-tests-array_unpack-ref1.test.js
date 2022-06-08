// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/array_unpack/ref1.phpt
  it("Array unpacking with element rc=1", function () {
    expect(parser.parseCode("<?php\n$a = 1;\n$b = [&$a]; //array (0 => (refcount=2, is_ref=1)=1)\nunset($a); //array (0 => (refcount=1, is_ref=1)=1)\nvar_dump([...$b]); //array (0 => (refcount=0, is_ref=0)=1)\n?>")).toMatchSnapshot();
  });
});
