// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/timezone_equals_basic.phpt
  it("IntlTimeZone equals handler: basic test", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\n$tz1 = intltz_create_time_zone('Europe/Lisbon');\n$tz2 = intltz_create_time_zone('Europe/Lisbon');\necho \"Comparison to self:\\n\";\nvar_dump($tz1 == $tz1);\necho \"Comparison to equal instance:\\n\";\nvar_dump($tz1 == $tz2);\necho \"Comparison to equivalent instance:\\n\";\nvar_dump($tz1 == intltz_create_time_zone('Portugal'));\necho \"Comparison to GMT:\\n\";\nvar_dump($tz1 == intltz_get_gmt());\n?>")).toMatchSnapshot();
  });
});
