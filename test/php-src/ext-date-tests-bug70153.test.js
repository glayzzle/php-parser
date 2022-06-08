// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug70153.phpt
  it("Bug #70153 (\\DateInterval incorrectly unserialized)", function () {
    expect(parser.parseCode("<?php\n$i1 = \\DateInterval::createFromDateString('+1 month');\n$i2 = unserialize(serialize($i1));\nvar_dump($i1->days, $i2->days);\nvar_dump($i2->special_amount, $i2->special_amount);\n?>")).toMatchSnapshot();
  });
});
