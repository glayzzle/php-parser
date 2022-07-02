// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/time/bug38524.phpt
  it("Bug #38524 (strptime() does not initialize the internal date storage structure)", function () {
    expect(parser.parseCode("<?php\n    var_dump(strptime('2006-08-20', '%Y-%m-%d'));\n?>")).toMatchSnapshot();
  });
});
