// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug35885.phpt
  it("Bug #35885 (strtotime(\"NOW\") no longer works)", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set(\"UTC\");\n$time = time();\n$ts = date(DATE_ISO8601, strtotime('NOW', $time));\n$ts2 = date(DATE_ISO8601, $time);\n$res = ($ts == $ts2);\nvar_dump($res);\nif (!$res) {\n    var_dump($ts);\n    var_dump($ts2);\n}\n?>")).toMatchSnapshot();
  });
});
