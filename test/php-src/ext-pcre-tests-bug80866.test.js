// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/bug80866.phpt
  it("Bug #80866 preg_split ignores limit flag when pattern with \\K has 0-width fullstring match", function () {
    expect(parser.parseCode("<?php\nvar_export(preg_split('~.{3}\\K~', 'abcdefghijklm', 3));\n?>")).toMatchSnapshot();
  });
});
