// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug48276.phpt
  it("Bug #48276 (date(\"Y\") prints wrong year on Big Endian machines)", function () {
    expect(parser.parseCode("<?php\nvar_dump(date(\"Y\", 1245623227));\n?>")).toMatchSnapshot();
  });
});
