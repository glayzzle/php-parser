// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/timezone_hasSameRules_basic.phpt
  it("IntlTimeZone::hasSameRules(): basic test", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\n$lsb = IntlTimeZone::createTimeZone('Europe/Lisbon');\n$prt = IntlTimeZone::createTimeZone('Portugal');\n$azo = IntlTimeZone::createTimeZone('Atlantic/Azores');\necho \"Europe/Lisbon has same rules as itself:\\n\";\nvar_dump($lsb->hasSameRules($lsb));\necho \"\\nEurope/Lisbon has same rules as Portugal:\\n\";\nvar_dump($lsb->hasSameRules($prt));\necho \"\\nEurope/Lisbon has same rules as Atlantic/Azores:\\n\";\nvar_dump(intltz_has_same_rules($lsb, $azo));\n?>")).toMatchSnapshot();
  });
});
