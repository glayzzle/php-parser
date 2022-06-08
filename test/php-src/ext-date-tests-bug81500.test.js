// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug81500.phpt
  it("Bug #81500 (Interval serialization regression since 7.3.14 / 7.4.2)", function () {
    expect(parser.parseCode("<?php\n$interval = new DateInterval('PT1S');\n$interval->f = -0.000001;\nvar_dump($interval->s, $interval->f);\n$interval = unserialize(serialize($interval));\nvar_dump($interval->s, $interval->f);\n?>")).toMatchSnapshot();
  });
});
