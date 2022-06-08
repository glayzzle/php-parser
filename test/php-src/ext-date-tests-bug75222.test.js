// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug75222.phpt
  it("Bug #75222 DateInterval microseconds property always 0", function () {
    expect(parser.parseCode("<?php\n$dt1 = new \\DateTimeImmutable('2017-01-01T00:00:00.000000Z');\n$dt2 = new \\DateTimeImmutable('2017-01-01T00:00:00.123456Z');\n$diff = $dt1->diff($dt2);\n//var_dump($diff);\nvar_dump($diff->f);\nvar_dump(get_object_vars($diff)['f']);\nvar_dump($diff->f === get_object_vars($diff)['f']);\n?>")).toMatchSnapshot();
  });
});
