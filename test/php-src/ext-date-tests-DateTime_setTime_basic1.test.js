// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/DateTime_setTime_basic1.phpt
  it("Test DateTime::setTime() function : basic functionality", function () {
    expect(parser.parseCode("<?php\n //Set the default time zone\ndate_default_timezone_set(\"Europe/London\");\necho \"*** Testing DateTime::setTime() : basic functionality ***\\n\";\n// Create a DateTime object\n$datetime = new DateTime(\"2009-01-31 15:14:10\");\necho \"Initial date: \" . $datetime ->format(DATE_RFC2822) . \"\\n\";\n$datetime->setTime(17, 20);\necho \"After modification1 \" . $datetime ->format(DATE_RFC2822) . \"\\n\";\n$datetime->setTime(19, 05, 59);\necho \"After modification2 \" . $datetime ->format(DATE_RFC2822) . \"\\n\";\n$datetime->setTime(24, 10);\necho \"After modification3 \" . $datetime ->format(DATE_RFC2822) . \"\\n\";\n$datetime->setTime(47, 35, 47);\necho \"After modification4 \" . $datetime ->format(DATE_RFC2822) . \"\\n\";\n$datetime->setTime(54, 25);\necho \"After modification5 \" . $datetime ->format(DATE_RFC2822) . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
