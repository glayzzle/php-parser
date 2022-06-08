// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug45682.phpt
  it("Bug #45682 (Unable to var_dump(DateInterval))", function () {
    expect(parser.parseCode("<?php\n$date = new DateTime(\"28-July-2008\");\n$other = new DateTime(\"31-July-2008\");\n$diff = date_diff($date, $other);\nvar_dump($diff);\n?>")).toMatchSnapshot();
  });
});
