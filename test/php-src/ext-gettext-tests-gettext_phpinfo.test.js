// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gettext/tests/gettext_phpinfo.phpt
  it("Test phpinfo() displays gettext support", function () {
    expect(parser.parseCode("<?php\nphpinfo();\n?>")).toMatchSnapshot();
  });
});
