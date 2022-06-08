// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug78383.phpt
  it("Bug #78383: Casting a DateTime to array no longer returns its properties", function () {
    expect(parser.parseCode("<?php\nvar_dump((array) new DateTime('2000-01-01 UTC'));\nvar_dump((array) new DateTimeZone('Europe/Berlin'));\n?>")).toMatchSnapshot();
  });
});
