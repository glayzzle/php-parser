// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug17988.phpt
  it("Bug #17988 (strtotime handling of postgresql timestamps)", function () {
    expect(parser.parseCode("<?php\necho gmdate('Y-m-d H:i:s', strtotime(\"2002-06-25 14:18:48.543728\")).\"\\n\";\necho gmdate('Y-m-d H:i:s', strtotime(\"2002-06-25 14:18:48.543728 GMT\")).\"\\n\";\necho gmdate('Y-m-d H:i:s', strtotime(\"2002-06-25 14:18:48.543728 EDT\")).\"\\n\";\necho gmdate('Y-m-d H:i:s', strtotime(\"2002-06-25 14:18:48.543728-00\")).\"\\n\";\necho gmdate('Y-m-d H:i:s', strtotime(\"2002-06-25 14:18:48.543728+00\")).\"\\n\";\necho gmdate('Y-m-d H:i:s', strtotime(\"2002-06-25 14:18:48.543728-04\")).\"\\n\";\necho gmdate('Y-m-d H:i:s', strtotime(\"2002-06-25 14:18:48.543728+04\")).\"\\n\";\necho gmdate('Y-m-d H:i:s', strtotime(\"2002-06-25 14:18:48.543728-0300\")).\"\\n\";\necho gmdate('Y-m-d H:i:s', strtotime(\"2002-06-25 14:18:48.543728+0300\")).\"\\n\";\necho gmdate('Y-m-d H:i:s', strtotime(\"2002-06-25 14:18:48.543728-0330\")).\"\\n\";\necho gmdate('Y-m-d H:i:s', strtotime(\"2002-06-25 14:18:48.543728+0330\")).\"\\n\";\n?>")).toMatchSnapshot();
  });
});
