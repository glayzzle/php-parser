// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug37747.phpt
  it("Bug #37747 (strtotime segfaults when given \"nextyear\")", function () {
    expect(parser.parseCode("<?php\n    date_default_timezone_set(\"Europe/Oslo\");\n    var_dump(strtotime(\"nextyear\"));\n    echo \"ALIVE\\n\";\n?>")).toMatchSnapshot();
  });
});
