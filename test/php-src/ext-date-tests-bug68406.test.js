// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug68406.phpt
  it("Bug #68406 calling var_dump on a DateTimeZone object modifies it", function () {
    expect(parser.parseCode("<?php\n$tz1 = new DateTimeZone('Europe/Berlin');\n$tz2 = new DateTimeZone('Europe/Berlin');\n$d = new DateTime('2014-12-24 13:00:00', $tz1);\nvar_dump($d->getTimezone(), $tz2);\nif($tz2 == $d->getTimezone()) {\n    echo \"yes\";\n}\nelse {\n    echo \"no\";\n}\n?>")).toMatchSnapshot();
  });
});
