// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/simplexml/tests/bug69491.phpt
  it("Bug #69491 (simplexml doesn't correctly parse empty nodes on same line as another node)", function () {
    expect(parser.parseCode("<?php\nvar_dump(simplexml_load_string('<a>\n  <b><c/></b>\n</a>'));?>")).toMatchSnapshot();
  });
});
