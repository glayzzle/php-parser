// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug66545.phpt
  it("Bug #66545 (DateTime)", function () {
    expect(parser.parseCode("<?php\n$debut = mktime(0, 0, 0, 10, 27, 2013);\n$fin = mktime(23, 59, 59, 11, 10, 2013);\n$d1 = new DateTime('now',new DateTimeZone('Europe/Paris'));\n$d2 = new DateTime('now',new DateTimeZone('Europe/Paris'));\n$d1->setTimestamp($debut);\n$d2->setTimestamp($fin);\n$diff = $d1->diff($d2);\nprint_r($diff);\n?>")).toMatchSnapshot();
  });
});
