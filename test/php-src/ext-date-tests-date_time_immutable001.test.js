// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/date_time_immutable001.phpt
  it("DateTimeImmutable - invalid arguments", function () {
    expect(parser.parseCode("<?php\nvar_dump(date_create_immutable('Invalid'));\n?>")).toMatchSnapshot();
  });
});
