// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug65672.phpt
  it("Test for bug #65672: Broken classes inherited from DatePeriod", function () {
    expect(parser.parseCode("<?php\n$interval = new DateInterval('P1D');\n$period = new class(new DateTime, $interval, new DateTime) extends DatePeriod {\n    public $extra = \"stuff\";\n};\nvar_dump($period->extra);\n$period->extra = \"modified\";\nvar_dump($period->extra);\n# Ensure we can modify properties (retrieve for write)\n$period->extra = [];\n$period->extra[] = \"array\";\nvar_dump($period->extra);\nvar_dump(isset($period->dynamic1));\n$period->dynamic1 = \"dynamic\";\nvar_dump($period->dynamic1);\n# Ensure we can modify properties (retrieve for write)\n$period->dynamic2 = [];\n$period->dynamic2[] = \"array\";\nvar_dump($period->dynamic2);\n$period->dynamic3[] = \"array\";\nvar_dump($period->dynamic3);\n?>")).toMatchSnapshot();
  });
});
