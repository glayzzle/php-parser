// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug78644.phpt
  it("Bug #78644: SEGFAULT in ZEND_UNSET_OBJ_SPEC_VAR_CONST_HANDLER", function () {
    expect(parser.parseCode("<?php\n$a = new stdClass;\nunset($a->b->c->d);\nunset($a->b->c['d']);\nvar_dump($a);\n?>")).toMatchSnapshot();
  });
});
