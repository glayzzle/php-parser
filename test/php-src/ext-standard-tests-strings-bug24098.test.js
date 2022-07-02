// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug24098.phpt
  it("Bug #24098 (pathinfo() crash)", function () {
    expect(parser.parseCode("<?php\n    var_dump(pathinfo(\"/dsds.asa\"));\n?>")).toMatchSnapshot();
  });
});
