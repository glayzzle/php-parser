// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug48097.phpt
  it("Bug #48097 (date_timezone_set function produces wrong datetime result)", function () {
    expect(parser.parseCode("<?php\n$d = date_create( \"Sun, 22 May 1955 02:00:00 +0200\" );\nvar_dump( $d );\necho $d->format( DATE_ISO8601 ), \"\\n\";\necho $d->format( 'U' ), \"\\n\\n\";\n$d->setTimeZone( new DateTimeZone( 'Europe/Budapest' ) );\nvar_dump( $d );\necho $d->format( DATE_ISO8601 ), \"\\n\\n\";\necho $d->format( 'U' ), \"\\n\\n\";\n?>")).toMatchSnapshot();
  });
});
