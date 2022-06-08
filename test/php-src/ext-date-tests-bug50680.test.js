// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug50680.phpt
  it("Bug #50680 (\"eighth\" quantifier is not understood)", function () {
    expect(parser.parseCode("<?php\nvar_dump(date(\"d\", strtotime(\"March 1 eighth day 2009\")));\n?>")).toMatchSnapshot();
  });
});
