// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug33415-1.phpt
  it("Bug #33415 [1] (Possibly invalid non-one-hour DST or timezone shifts)", function () {
    expect(parser.parseCode("<?php\nprint \"TZ=America/Jujuy  - Is it OK for this to be 2 AM, rather than 1\nAM as per most DST transitions?\\n\";\ndate_default_timezone_set(\"America/Jujuy\");\n$tStamp = mktime (17, 17, 17, 1, 7593, 1970);\nprint \"tStamp=\". date(\"l Y-m-d H:i:s T I\", $tStamp). \"\\n\";\n$strtotime_tstamp = strtotime(\"next Monday\", $tStamp);\nprint \"result=\".date(\"l Y-m-d H:i:s T I\", $strtotime_tstamp).\"\\n\";\nprint \"wanted=Monday            00:00:00\\n\\n\";\nprint \"TZ=Asia/Tbilisi - Is it OK for this to be 2 AM?\\n\";\ndate_default_timezone_set(\"Asia/Tbilisi\");\n$tStamp = mktime (17, 17, 17, 1, 12863, 1970);\nprint \"tStamp=\". date(\"l Y-m-d H:i:s T I\", $tStamp). \"\\n\";\n$strtotime_tstamp = strtotime(\"next Sunday\", $tStamp);\nprint \"result=\".date(\"l Y-m-d H:i:s T I\", $strtotime_tstamp).\"\\n\";\nprint \"wanted=Sunday            00:00:00\\n\\n\";\n?>")).toMatchSnapshot();
  });
});
