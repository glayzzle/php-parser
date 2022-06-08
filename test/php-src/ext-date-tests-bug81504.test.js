// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug81504.phpt
  it("Bug #81504: Incorrect timezone transition details for POSIX data", function () {
    expect(parser.parseCode("<?php\n$tz = new DateTimeZone('Europe/Amsterdam');\nforeach ($tz->getTransitions(strtotime(\"1996-01-01\"), strtotime(\"1997-12-31\")) as $tr) {\n    echo \"{$tr['time']} {$tr['offset']} {$tr['abbr']}\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
