// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug65548.phpt
  it("Test for bug #65548: Comparison for DateTimeImmutable doesn't work", function () {
    expect(parser.parseCode("<?php\n$iToday = new DateTimeImmutable('today');\n$iTomorrow = new DateTimeImmutable('tomorrow');\n$mToday = new DateTime('today');\n$mTomorrow = new DateTime('tomorrow');\nvar_dump($iToday < $iTomorrow);\nvar_dump($iToday == $iTomorrow);\nvar_dump($iToday > $iTomorrow);\nvar_dump($iToday == $mToday);\nvar_dump($iToday === $mToday);\nvar_dump($iToday < $mTomorrow);\nvar_dump($iToday == $mTomorrow);\nvar_dump($iToday > $mTomorrow);\n?>")).toMatchSnapshot();
  });
});
