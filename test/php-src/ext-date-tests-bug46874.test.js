// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug46874.phpt
  it("Bug #46874 (DatePeriod not resetting after foreach loop)", function () {
    expect(parser.parseCode("<?php\n$dp = new DatePeriod('R5/2008-03-01T13:00:00Z/P1Y2M10DT2H30M');\nforeach ($dp as $date) {\n    echo $date->format(\"Y-m-d H:i:s\\n\");\n}\necho \"\\n\";\n// this should repeat the same range\nforeach ($dp as $date) {\n    echo $date->format(\"Y-m-d H:i:s\\n\");\n}\n?>")).toMatchSnapshot();
  });
});
