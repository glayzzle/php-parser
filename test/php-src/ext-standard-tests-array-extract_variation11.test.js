// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/extract_variation11.phpt
  it("Test extract() function - ensure EXTR_REFS works when array is referenced and keys clash with variables in current scope.", function () {
    expect(parser.parseCode("<?php\n$a = array('foo' => 'original.foo');\n$ref = &$a;\n$foo = 'test';\nextract($a, EXTR_OVERWRITE|EXTR_REFS);\n$foo = 'changed.foo';\nvar_dump($a['foo']);\n?>")).toMatchSnapshot();
  });
});
