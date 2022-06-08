// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/dateformat_get_set_timezone.phpt
  it("IntlDateFormatter: get/setTimeZone()", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\nini_set(\"intl.default_locale\", \"pt_PT\");\nini_set(\"date.timezone\", 'Atlantic/Azores');\n$ts = strtotime('2012-01-01 00:00:00 UTC');\nfunction d(IntlDateFormatter $df) {\nglobal $ts;\necho $df->format($ts), \"\\n\";\nvar_dump(\n$df->getTimeZoneID(),\n$df->getTimeZone()->getID());\necho \"\\n\";\n}\n$df = new IntlDateFormatter('pt_PT', 0, 0, 'Europe/Minsk');\nd($df);\n$df->setTimeZone(NULL);\nd($df);\n$df->setTimeZone('Europe/Madrid');\nd($df);\n$df->setTimeZone(IntlTimeZone::createTimeZone('Europe/Paris'));\nd($df);\n$df->setTimeZone(new DateTimeZone('Europe/Amsterdam'));\nd($df);\n?>")).toMatchSnapshot();
  });
});
