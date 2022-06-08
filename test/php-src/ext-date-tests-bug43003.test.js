// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug43003.phpt
  it("Bug #43003 (Invalid timezone reported for DateTime objects constructed using a timestamp)", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set('Europe/Oslo');\n$oDateTest = new DateTime(\"@0\", new DateTimeZone(date_default_timezone_get()));\necho $oDateTest->getTimezone()->getName().\": \" .  $oDateTest->format(\"Y-m-d H:i:s\").\"\\n\";\n$oDateTest->setTimezone(new DateTimeZone(\"UTC\"));\necho $oDateTest->getTimezone()->getName().\": \" .  $oDateTest->format(\"Y-m-d H:i:s\").\"\\n\";\n$oDateTest->setTimezone(new DateTimeZone(date_default_timezone_get()));\necho $oDateTest->getTimezone()->getName().\": \" . $oDateTest->format(\"Y-m-d H:i:s\").\"\\n\";\n$oDateTest = new DateTime(\"@0\");\necho $oDateTest->getTimezone()->getName().\": \" .  $oDateTest->format(\"Y-m-d H:i:s\").\"\\n\";\n$oDateTest->setTimezone( new DateTimeZone(date_default_timezone_get()));\necho $oDateTest->getTimezone()->getName().\": \" . $oDateTest->format(\"Y-m-d H:i:s\").\"\\n\";\n?>")).toMatchSnapshot();
  });
});
