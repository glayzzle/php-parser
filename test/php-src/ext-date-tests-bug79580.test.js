// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug79580.phpt
  it("Bug #79580: date_create_from_format misses leap year", function () {
    expect(parser.parseCode("<?php\n$tz = timezone_open( \"UTC\" );\n$values = [ \"31 2020\", \"60 2020\", \"91 2020\", \"121 2020\", \"130 2020\" ];\nforeach ( $values as $value )\n{\n\techo \"Testing for {$value}: \";\n\t$dt = DateTime::createFromFormat( 'z Y', $value );\n\tif (!$dt) {\n\t\techo DateTime::getLastErrors()['errors'][0], \"\\n\";\n\t} else {\n\t\techo $dt->format('Y-m-d'), \"\\n\";\n\t}\n}\n?>")).toMatchSnapshot();
  });
});
