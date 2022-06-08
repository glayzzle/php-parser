// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug74524.phpt
  it("Bug #74524 (Date diff is bad calculated, in same time zone)", function () {
    expect(parser.parseCode("<?php\n$a = new DateTime(\"2017-11-17 22:05:26.000000\");\n$b = new DateTime(\"2017-04-03 22:29:15.079459\");\n$diff = $a->diff($b);\nprint_r($diff);\n?>")).toMatchSnapshot();
  });
});
