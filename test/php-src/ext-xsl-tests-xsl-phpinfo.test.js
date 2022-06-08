// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xsl/tests/xsl-phpinfo.phpt
  it("Test phpinfo() displays xsl info", function () {
    expect(parser.parseCode("<?php\nphpinfo();\n?>")).toMatchSnapshot();
  });
});
