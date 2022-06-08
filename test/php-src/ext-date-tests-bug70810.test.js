// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug70810.phpt
  it("Bug #70810: DateInterval equals every other DateInterval", function () {
    expect(parser.parseCode("<?php\n$i1 = new DateInterval('P1D');\n$i2 = new DateInterval('PT1H');\nvar_dump($i1 == $i2);\nvar_dump($i1 < $i2);\nvar_dump($i1 > $i2);\n$i2 = new DateInterval('P1D');\nvar_dump($i1 == $i2);\nvar_dump($i1 < $i2);\nvar_dump($i1 > $i2);\n?>")).toMatchSnapshot();
  });
});
