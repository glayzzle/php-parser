// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug72719.phpt
  it("Bug #72719: Relative datetime format ignores weekday on sundays only", function () {
    expect(parser.parseCode("<?php\necho (new DateTimeImmutable('Monday next week 13:00'))->format('l'), \"\\n\";\necho (new DateTimeImmutable('Tuesday next week 14:00'))->format('l'), \"\\n\";\necho (new DateTimeImmutable('Wednesday next week 14:00'))->format('l'), \"\\n\";\necho (new DateTimeImmutable('Thursday next week 15:00'))->format('l'), \"\\n\";\necho (new DateTimeImmutable('Friday next week 16:00'))->format('l'), \"\\n\";\necho (new DateTimeImmutable('Saturday next week 17:00'))->format('l'), \"\\n\";\necho (new DateTimeImmutable('Sunday next week 18:00'))->format('l'), \"\\n\";\n?>")).toMatchSnapshot();
  });
});
