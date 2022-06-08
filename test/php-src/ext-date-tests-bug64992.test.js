// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug64992.phpt
  it("Bug #64992 (dst not handled past 2038)", function () {
    expect(parser.parseCode("<?php\n$firstyear = 2035;\n$lastyear = 2040;\n$tz = 'America/Los_Angeles';\ndate_default_timezone_set('America/Los_Angeles');\n$dt = new DateTime((string) ($firstyear - 1) . \"-07-02\");\n$di = new DateInterval('P6M');\nfor ($i = 0; $i < ($lastyear - $firstyear) * 2; $i++) {\n\t$dt->add($di);\n\t$gmto = $dt->getOffset();\n\techo \"Time Zone offset for $tz for \" , $dt->format('Y-m-d') , \" is $gmto\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
