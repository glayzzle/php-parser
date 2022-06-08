// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/bug23584.phpt
  it("Bug #23584 (error line numbers off by one when using #!php)", function () {
    expect(parser.parseCode("#!php\n<?php\nerror_reporting(E_ALL);\necho $foo;\n?>")).toMatchSnapshot();
  });
});
