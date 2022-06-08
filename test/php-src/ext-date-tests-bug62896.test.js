// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug62896.phpt
  it("Bug #62896 Unixtimestamp may take on local times DST flag (this test will only be valid during CEST)", function () {
    expect(parser.parseCode("<?php\n  $tz = new DateTimeZone('Europe/Berlin');\n  echo \"FROM TIMESTAMP, NO TZ:\\n\";\n  $date = new DateTime('@'.strtotime('2012-08-22 00:00:00 CEST'));\n  echo $date->format('Y-m-d H:i:s T').' (offset '.$date->getOffset().\")\\n\";\n  $date->modify('+0 days');\n  echo $date->format('Y-m-d H:i:s T').' (offset '.$date->getOffset().\")\\n\";\n  echo \"FROM TIMESTAMP, WITH TZ:\\n\";\n  $date = new DateTime('@'.strtotime('2012-08-22 00:00:00 CEST'));\n  $date->setTimezone($tz);\n  echo $date->format('Y-m-d H:i:s T').' (offset '.$date->getOffset().\")\\n\";\n  $date->modify('+0 days');\n  echo $date->format('Y-m-d H:i:s T').' (offset '.$date->getOffset().\")\\n\";\n  echo \"FROM STRING:\\n\";\n  $date = new DateTime('2012-08-22 00:00:00 CEST', $tz);\n  echo $date->format('Y-m-d H:i:s T').' (offset '.$date->getOffset().\")\\n\";\n  $date->modify('+0 days');\n  echo $date->format('Y-m-d H:i:s T').' (offset '.$date->getOffset().\")\\n\";\n?>")).toMatchSnapshot();
  });
});
