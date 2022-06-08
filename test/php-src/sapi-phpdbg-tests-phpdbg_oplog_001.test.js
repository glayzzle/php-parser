// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/phpdbg/tests/phpdbg_oplog_001.phpt
  it("Test phpdbg_*_oplog() functions", function () {
    expect(parser.parseCode("<?php\nclass A {\n  public function b($c = 1) {\n    if ($c == 1) {\n      // comment\n    }\n  }\n}\nphpdbg_start_oplog();\necho \"hallo\";\n// fcalls\n$a = new A();\n$a->b();\n$a->b('ha');\nvar_dump(phpdbg_end_oplog([\"functions\" => true]));\n")).toMatchSnapshot();
  });
});
