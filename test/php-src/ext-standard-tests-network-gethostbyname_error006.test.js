// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/network/gethostbyname_error006.phpt
  it("gethostbyname() function - basic invalid parameter test", function () {
    expect(parser.parseCode("<?php\n    var_dump(gethostbyname(\".toto.toto.toto\"));\n?>")).toMatchSnapshot();
  });
});
