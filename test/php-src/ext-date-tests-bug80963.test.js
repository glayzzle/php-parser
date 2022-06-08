// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug80963.phpt
  it("Bug #80963: DateTimeZone::getTransitions() truncated", function () {
    expect(parser.parseCode("<?php\n$tzids = [ 'Europe/London', 'America/New_York', 'Europe/Berlin' ];\nforeach ($tzids as $tzid)\n{\n\t$tz = new DateTimeZone($tzid);\n\t$t  = $tz->getTransitions();\n\tvar_dump(sizeof($t), end($t));\n}\n?>")).toMatchSnapshot();
  });
});
