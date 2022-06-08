// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug75857.phpt
  it("Failing test case for #75857: Long timezones truncation", function () {
    expect(parser.parseCode("<?php\n$longDate = new DateTime('now', new DateTimeZone('America/Argentina/ComodRivadavia'));\n$mediumDate = new DateTime('now', new DateTimeZone('America/Indiana/Indianapolis'));\n$smallDate = new DateTime('now', new DateTimeZone('America/Sao_Paulo'));\nvar_dump($longDate->format('e'));\nvar_dump($mediumDate->format('e'));\nvar_dump($smallDate->format('e'));\n?>")).toMatchSnapshot();
  });
});
