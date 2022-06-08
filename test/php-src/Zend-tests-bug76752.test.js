// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug76752.phpt
  it("Bug #76752 (Crash in ZEND_COALESCE_SPEC_TMP_HANDLER - assertion in _get_zval_ptr_tmp failed)", function () {
    expect(parser.parseCode("<?php\n$obj = new stdClass;\n$val = 'foo';\n$obj->prop = &$val;\nvar_dump($obj->prop ?? []);\n?>")).toMatchSnapshot();
  });
});
