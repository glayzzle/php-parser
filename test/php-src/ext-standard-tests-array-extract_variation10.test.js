// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/extract_variation10.phpt
  it("Test extract() function - ensure EXTR_REFS doesn't mess with isRef flag on COW references to array elements.", function () {
    expect(parser.parseCode("<?php\n$a = array('foo' => 'original.foo');\n$nonref = $a['foo'];\n$ref = &$a;\nextract($a, EXTR_REFS);\n$a['foo'] = 'changed.foo';\nvar_dump($nonref);\n?>")).toMatchSnapshot();
  });
});
