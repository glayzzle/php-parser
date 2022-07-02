// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/bug30074.phpt
  it("Bug #30074 (EG(uninitialized_zval_ptr) gets set to reference using EXTR_REFS, affecting later values)", function () {
    expect(parser.parseCode("<?php\n$result = extract(array('a'=>$undefined), EXTR_REFS);\nvar_dump(array($a));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
