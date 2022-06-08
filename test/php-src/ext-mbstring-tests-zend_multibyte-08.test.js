// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/zend_multibyte-08.phpt
  it("zend multibyte (8)", function () {
    expect(parser.parseCode("<?php\ndeclare(encoding=\"CP932\");\nvar_dump(bin2hex(\"�e�X�g\"));\n?>")).toMatchSnapshot();
  });
});
