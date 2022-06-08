// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug54340.phpt
  it("Bug #54340 (DateTime::add() method bug)", function () {
    expect(parser.parseCode("<?php\n$interval = new DateInterval('P1D');\n$dt = new DateTime('first day of January 2011');\nvar_dump($dt);\n$dt->add($interval);\nvar_dump($dt);\n$dt = new DateTime('first day of January 2011');\n$dt->sub($interval);\nvar_dump($dt);\n?>")).toMatchSnapshot();
  });
});
