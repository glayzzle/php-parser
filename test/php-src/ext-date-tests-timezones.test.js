// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/timezones.phpt
  it("setting bogus timezones", function () {
    expect(parser.parseCode("<?php\n//bogus\nvar_dump(date_default_timezone_set('AAA'));\nvar_dump(date_default_timezone_set('ZZZ'));\n//now the first and the last one\nvar_dump(date_default_timezone_set(\"Africa/Abidjan\"));\nvar_dump(date_default_timezone_set(\"Zulu\"));\necho \"done\\n\";\n?>")).toMatchSnapshot();
  });
});
