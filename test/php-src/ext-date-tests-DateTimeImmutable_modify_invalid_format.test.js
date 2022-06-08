// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/DateTimeImmutable_modify_invalid_format.phpt
  it("DateTimeImmutable::modify() with invalid format", function () {
    expect(parser.parseCode("<?php\n$datetime = new DateTimeImmutable;\nvar_dump($datetime->modify(''));\n?>")).toMatchSnapshot();
  });
});
