// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/cli/tests/bug67741.phpt
  it("Bug #67741 (auto_prepend_file messes up __LINE__)", function () {
    expect(parser.parseCode("#!/bin/env php\n<?php\necho \"primary lineno: \", __LINE__, \"\\n\";\n?>")).toMatchSnapshot();
  });
});
