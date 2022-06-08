// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/zend_multibyte-04.phpt
  it("zend multibyte (4)", function () {
    expect(parser.parseCode("<?php\nvar_dump(bin2hex(\"�e�X�g\"));\n?>")).toMatchSnapshot();
  });
});
