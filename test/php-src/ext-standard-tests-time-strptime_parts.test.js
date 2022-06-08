// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/time/strptime_parts.phpt
  it("Test strptime() function : basic functionality", function () {
    expect(parser.parseCode("<?php\n$orig = setlocale(LC_ALL, 'C');\ndate_default_timezone_set(\"GMT\");\nputenv(\"TZ=GMT\");\necho \"*** Testing strptime() : basic functionality ***\\n\";\n$input = \"10:01:20 AM July 2 1963\";\n$tstamp = strtotime($input);\n$str = strftime(\"%r %B%e %Y %Z\", $tstamp);\n$res = strptime($str, '%H:%M:%S %p %B %d %Y %Z');\nvar_dump($res[\"tm_sec\"]);\nvar_dump($res[\"tm_min\"]);\nvar_dump($res[\"tm_hour\"]);\nvar_dump($res[\"tm_mday\"]);\nvar_dump($res[\"tm_mon\"]);\nvar_dump($res[\"tm_year\"]);\n$str = strftime(\"%T %D\", $tstamp);\n$res = strptime($str, '%H:%M:%S %m/%d/%y');\nvar_dump($res[\"tm_sec\"]);\nvar_dump($res[\"tm_min\"]);\nvar_dump($res[\"tm_hour\"]);\nvar_dump($res[\"tm_mday\"]);\nvar_dump($res[\"tm_mon\"]);\nvar_dump($res[\"tm_year\"]);\n$str = strftime(\"%A %B %e %R\", $tstamp);\n$res = strptime($str, '%A %B %e %R');\nvar_dump($res[\"tm_sec\"]);\nvar_dump($res[\"tm_min\"]);\nvar_dump($res[\"tm_hour\"]);\nvar_dump($res[\"tm_mday\"]);\nvar_dump($res[\"tm_mon\"]);\nvar_dump($res[\"tm_year\"]);\nsetlocale(LC_ALL, $orig);\n?>")).toMatchSnapshot();
  });
});
