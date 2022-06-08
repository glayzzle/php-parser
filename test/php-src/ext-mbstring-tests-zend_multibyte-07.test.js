// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/zend_multibyte-07.phpt
  it("zend multibyte (7)", function () {
    expect(parser.parseCode("<?php\ndeclare(encoding=\"UTF-8\");\nvar_dump(bin2hex(\"テスト\"));\n?>")).toMatchSnapshot();
  });
});
