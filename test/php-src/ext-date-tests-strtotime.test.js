// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/strtotime.phpt
  it("strtotime() function", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set('Europe/Oslo');\n$d = array();\n$d[] = strtotime(\"2005-07-14 22:30:41\");\n$d[] = strtotime(\"2005-07-14 22:30:41 GMT\");\n$d[] = strtotime(\"@1121373041\");\n$d[] = strtotime(\"@1121373041 CEST\");\nforeach($d as $date) {\n    echo date(DATE_ISO8601, $date), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
