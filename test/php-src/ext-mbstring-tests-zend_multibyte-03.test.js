// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/zend_multibyte-03.phpt
  it("zend multibyte (3)", function () {
    expect(parser.parseCode("<?php\nvar_dump(bin2hex(\"テスト\"));\n?>")).toMatchSnapshot();
  });
});
