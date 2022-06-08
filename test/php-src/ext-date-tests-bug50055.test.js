// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug50055.phpt
  it("Bug #50555 (DateTime::sub() allows 'relative' time modifications).", function () {
    expect(parser.parseCode("<?php\n$now = '2010-03-07 13:21:38 UTC';\n//positive DateInterval\n$da1 = date_create( $now );\n$ds1 = date_create( $now );\n$i = DateInterval::createFromDateString('third Tuesday of next month');\necho $da1->format( DateTime::ISO8601 ), \"\\n\";\necho date_add($da1, $i)->format( DateTime::ISO8601 ), \"\\n\";\ndate_sub($ds1, $i);\n//negative DateInterval\n$da2 = date_create( $now );\n$ds2 = date_create( $now );\n$i2 = DateInterval::createFromDateString('third Tuesday of last month');\necho $da2->format( DateTime::ISO8601 ), \"\\n\";\necho date_add($da2, $i2)->format( DateTime::ISO8601 ), \"\\n\";//works\ndate_sub($ds2, $i);\n?>")).toMatchSnapshot();
  });
});
