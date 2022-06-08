// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug74671.phpt
  it("Bug #74671 (DST timezone abbreviation has incorrect offset)", function () {
    expect(parser.parseCode("<?php\n$dt = new DateTime(\n    '2017-05-16T10:11:32',\n    new DateTimeZone('CEST')\n);\nvar_dump($dt);\nvar_dump($dt->format('c'));\n?>")).toMatchSnapshot();
  });
});
