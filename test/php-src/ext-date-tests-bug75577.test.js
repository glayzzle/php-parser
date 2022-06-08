// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug75577.phpt
  it("Test for bug #75577: DateTime::createFromFormat does not accept 'v' format specifier", function () {
    expect(parser.parseCode("<?php\n$d = new DateTime(\"2018-10-09 09:56:45.412000\");\nvar_dump($s = $d->format(DateTime::RFC3339_EXTENDED));\n$d2 = DateTime::createFromFormat(DateTime::RFC3339_EXTENDED, $s);\nvar_dump($d2);\n?>")).toMatchSnapshot();
  });
});
