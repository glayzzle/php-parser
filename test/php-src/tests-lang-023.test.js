// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/023.phpt
  it("Regression test", function () {
    expect(parser.parseCode("PHP Regression Test\n<?php\ninclude(\"023-1.inc\");\n$wedding_timestamp = mktime(20,0,0,8,31,1997);\n$time_left=$wedding_timestamp-time();\nif ($time_left>0) {\n  $days = $time_left/(24*3600);\n  $time_left -= $days*24*3600;\n  $hours = $time_left/3600;\n  $time_left -= $hours*3600;\n  $minutes = $time_left/60;\n  echo \"Limor Ullmann is getting married on \".($wedding_date=date(\"l, F dS, Y\",$wedding_timestamp)).\",\\nwhich is $days days, $hours hours and $minutes minutes from now.\\n\";\n  echo \"Her hashed wedding date is $wedding_date.\\n\";\n} else {\n  echo \"Limor Ullmann is now Limor Baruch :I\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
