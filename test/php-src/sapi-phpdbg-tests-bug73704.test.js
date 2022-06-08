// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/phpdbg/tests/bug73704.phpt
  it("Bug #73704 (phpdbg shows the wrong line in files with shebang)", function () {
    expect(parser.parseCode("#!/usr/bin/env php\n<?php\necho 1;\n")).toMatchSnapshot();
  });
});
