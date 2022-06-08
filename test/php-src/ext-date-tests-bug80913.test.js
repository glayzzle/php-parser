// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug80913.phpt
  it("Bug #80913 (DateTime(Immutable)::sub around DST yield incorrect time)", function () {
    expect(parser.parseCode("<?php\n$date = new DateTime('2021-03-28 03:00:00', new DateTimeZone('Europe/Amsterdam'));\n$_30mbefore = (clone $date)->sub(new DateInterval('PT30M'));\n$_30mafter = (clone $date)->add(new DateInterval('PT30M'));\nvar_dump($date->format(DATE_ATOM));\nvar_dump($_30mbefore->format(DATE_ATOM));\nvar_dump($_30mafter->format(DATE_ATOM));\n?>")).toMatchSnapshot();
  });
});
