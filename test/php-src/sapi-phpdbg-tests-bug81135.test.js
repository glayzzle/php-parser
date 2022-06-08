// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/phpdbg/tests/bug81135.phpt
  it("Bug #81135: unknown help topic fails assertion", function () {
    expect(parser.parseCode("<?php\n?>")).toMatchSnapshot();
  });
});
