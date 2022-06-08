// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug73489.phpt
  it("Bug #73489: wrong timestamp when call setTimeZone multi times with UTC offset", function () {
    expect(parser.parseCode("<?php\n// example 1 - Timestamp is changing\n$datetime = new DateTime('2016-11-09 20:00:00', new DateTimeZone('UTC'));\nvar_dump($datetime->getTimestamp());\n$datetime->setTimeZone(new DateTimeZone('-03:00'));\n$datetime->setTimeZone(new DateTimeZone('-03:00'));\nvar_dump($datetime->getTimestamp());\n// example 2 - Timestamp keeps if you use getTimestamp() before second setTimeZone() calls\n$datetime = new DateTime('2016-11-09 20:00:00', new DateTimeZone('UTC'));\nvar_dump($datetime->getTimestamp());\n$datetime->setTimeZone(new DateTimeZone('-03:00'));\n$datetime->getTimestamp();\n$datetime->setTimeZone(new DateTimeZone('-03:00'));\nvar_dump($datetime->getTimestamp());\n?>")).toMatchSnapshot();
  });
});
