// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/date-set-timestamp.phpt
  it("DateTime::setTimestamp()", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set('Europe/Oslo');\n$d = new DateTime( '@1217184864' );\necho $d->format( \"Y-m-d H:i e\\n\" );\n$d = new DateTime();\n$d->setTimestamp( 1217184864 );\necho $d->format( \"Y-m-d H:i e\\n\" );\n?>")).toMatchSnapshot();
  });
});
