// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/timezone_toDateTimeZone_error.phpt
  it("IntlTimeZone::toDateTimeZone(): errors", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\n$tz = IntlTimeZone::createTimeZone('Etc/Unknown');\ntry {\n    var_dump($tz->toDateTimeZone());\n} catch (Exception $e) {\n    var_dump($e->getMessage());\n}\nvar_dump(intltz_to_date_time_zone(1));\n?>")).toMatchSnapshot();
  });
});
