// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/timezone_countEquivalentIDs_basic.phpt
  it("IntlTimeZone::countEquivalentIDs(): basic test", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\n$count = IntlTimeZone::countEquivalentIDs('Europe/Lisbon');\nvar_dump($count >= 2);\n$count2 = intltz_count_equivalent_ids('Europe/Lisbon');\nvar_dump($count2 == $count);\n?>")).toMatchSnapshot();
  });
});
