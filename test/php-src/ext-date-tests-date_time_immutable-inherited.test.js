// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/date_time_immutable-inherited.phpt
  it("Tests for DateTimeImmutable.", function () {
    expect(parser.parseCode("<?php\n$tz = new DateTimeZone(\"Asia/Tokyo\");\n$current = \"2012-12-27 16:24:08\";\necho \"\\ngetTimezone():\\n\";\n$v = date_create_immutable($current);\n$x = $v->getTimezone();\nvar_dump($x->getName());\necho \"\\ngetTimestamp():\\n\";\n$v = date_create_immutable($current);\n$x = $v->getTimestamp();\nvar_dump($x);\n?>")).toMatchSnapshot();
  });
});
