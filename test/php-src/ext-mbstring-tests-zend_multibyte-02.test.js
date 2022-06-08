// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/zend_multibyte-02.phpt
  it("zend multibyte (2)", function () {
    expect(parser.parseCode("<?php\nvar_dump(bin2hex(\"テスト\"));\n?>")).toMatchSnapshot();
  });
});
