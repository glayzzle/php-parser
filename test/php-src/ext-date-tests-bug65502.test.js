// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug65502.phpt
  it("Test for bug #65502: DateTimeImmutable::createFromFormat returns DateTime", function () {
    expect(parser.parseCode("<?php\necho get_class(DateTimeImmutable::createFromFormat('j-M-Y', '12-Sep-2013'));\n?>")).toMatchSnapshot();
  });
});
