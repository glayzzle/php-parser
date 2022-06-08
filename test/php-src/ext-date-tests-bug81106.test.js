// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug81106.phpt
  it("Bug #81106: Regression in 8.1: add() now truncate ->f", function () {
    expect(parser.parseCode("<?php\n$dateInterval = new DateInterval('PT0S');\n$dateInterval->f = 1.234;\necho (new DateTimeImmutable('2000-01-01 00:00:00'))->add($dateInterval)->format('Y-m-d H:i:s.u');\n?>")).toMatchSnapshot();
  });
});
