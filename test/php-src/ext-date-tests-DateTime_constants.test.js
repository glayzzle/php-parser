// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/DateTime_constants.phpt
  it("DateTime constants", function () {
    expect(parser.parseCode("<?php\nvar_dump(\n    DATE_ATOM    === DateTime::ATOM,\n    DATE_COOKIE  === DateTime::COOKIE,\n    DATE_ISO8601 === DateTime::ISO8601,\n    DATE_RFC822  === DateTime::RFC822,\n    DATE_RFC850  === DateTime::RFC850,\n    DATE_RFC1036 === DateTime::RFC1036,\n    DATE_RFC1123 === DateTime::RFC1123,\n    DATE_RFC2822 === DateTime::RFC2822,\n    DATE_RFC3339 === DateTime::RFC3339,\n    DATE_RSS     === DateTime::RSS,\n    DATE_W3C     === DateTime::W3C\n);\n?>")).toMatchSnapshot();
  });
});
