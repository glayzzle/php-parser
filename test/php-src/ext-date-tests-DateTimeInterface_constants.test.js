// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/DateTimeInterface_constants.phpt
  it("DateTimeInterface constants", function () {
    expect(parser.parseCode("<?php\nvar_dump(\n    DATE_ATOM    === DateTimeInterface::ATOM,\n    DATE_COOKIE  === DateTimeInterface::COOKIE,\n    DATE_ISO8601 === DateTimeInterface::ISO8601,\n    DATE_RFC822  === DateTimeInterface::RFC822,\n    DATE_RFC850  === DateTimeInterface::RFC850,\n    DATE_RFC1036 === DateTimeInterface::RFC1036,\n    DATE_RFC1123 === DateTimeInterface::RFC1123,\n    DATE_RFC2822 === DateTimeInterface::RFC2822,\n    DATE_RFC3339 === DateTimeInterface::RFC3339,\n    DATE_RSS     === DateTimeInterface::RSS,\n    DATE_W3C     === DateTimeInterface::W3C\n);\n?>")).toMatchSnapshot();
  });
});
