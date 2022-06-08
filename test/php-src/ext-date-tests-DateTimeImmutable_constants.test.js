// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/DateTimeImmutable_constants.phpt
  it("DateTimeImmutable constants", function () {
    expect(parser.parseCode("<?php\nvar_dump(\n    DATE_ATOM    === DateTimeImmutable::ATOM,\n    DATE_COOKIE  === DateTimeImmutable::COOKIE,\n    DATE_ISO8601 === DateTimeImmutable::ISO8601,\n    DATE_RFC822  === DateTimeImmutable::RFC822,\n    DATE_RFC850  === DateTimeImmutable::RFC850,\n    DATE_RFC1036 === DateTimeImmutable::RFC1036,\n    DATE_RFC1123 === DateTimeImmutable::RFC1123,\n    DATE_RFC2822 === DateTimeImmutable::RFC2822,\n    DATE_RFC3339 === DateTimeImmutable::RFC3339,\n    DATE_RSS     === DateTimeImmutable::RSS,\n    DATE_W3C     === DateTimeImmutable::W3C\n);\n?>")).toMatchSnapshot();
  });
});
