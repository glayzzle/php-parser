// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug52342.phpt
  it("Bug #52342 (DateTime setIsoDate results in wrong timestamp)", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set('Europe/Berlin');\n$from = new DateTime();\n$from->setTime(0, 0, 0);\n$from->setISODate(2010, 28, 1); //Montag der 28ten Woche 2010\necho $from->format('d.m.Y H:i'), \"\\n\"; //A\necho $from->getTimestamp(), \"\\n\"; //B\necho date('d.m.Y H:i', $from->getTimestamp()), \"\\n\"; //C\n$from->add(new DateInterval('P0D'));\necho $from->getTimestamp(), \"\\n\"; //B\necho date('d.m.Y H:i', $from->getTimestamp()), \"\\n\"; //C\n?>")).toMatchSnapshot();
  });
});
