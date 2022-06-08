// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/timezone_getOffset_basic.phpt
  it("IntlTimeZone::getOffset(): basic test", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\n$ams = IntlTimeZone::createTimeZone('Europe/Amsterdam');\n$date = strtotime(\"1 July 2012 +0000\");\nvar_dump($ams->getOffset($date *1000., true, $rawOffset, $dstOffset),\n    $rawOffset, $dstOffset);\n$lsb = IntlTimeZone::createTimeZone('Europe/Lisbon');\nvar_dump(intltz_get_offset($lsb, $date *1000., true, $rawOffset, $dstOffset),\n    $rawOffset, $dstOffset);\n?>")).toMatchSnapshot();
  });
});
