// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/zend_multibyte-05.phpt
  it("zend multibyte (5)", function () {
    expect(parser.parseCode("<?php\n// forcefully interpret an UTF-8 encoded string as EUC-JP and then convert it\n// back to UTF-8. There should be only a pair of consecutive bytes that is\n// valid EUC-encoded character \"鴻\".\nvar_dump(bin2hex(\"テスト\"));\n?>")).toMatchSnapshot();
  });
});
