// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug78751.phpt
  it("Bug #78751 (Serialising DatePeriod converts DateTimeImmutable)", function () {
    expect(parser.parseCode("<?php\n$oDay = new DateTimeImmutable('2019-10-25');\n$oDateInterval = DateInterval::createFromDateString('1 day');\n$oDays = new DatePeriod($oDay, $oDateInterval, $oDay->modify('+1 day'));\n$oDays = unserialize(serialize($oDays));\nvar_dump(\n    $oDays->start instanceof DateTimeImmutable,\n    $oDays->end instanceof DateTimeImmutable\n);\n?>")).toMatchSnapshot();
  });
});
