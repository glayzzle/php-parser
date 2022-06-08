// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug37616.phpt
  it("Bug #37616 (DATE_RFC822 does not product RFC 822 dates)", function () {
    expect(parser.parseCode("<?php\n    date_default_timezone_set(\"Europe/Oslo\");\n    var_dump(date(DATE_RFC822, strtotime(\"1 Jul 06 14:27:30 +0200\")));\n?>")).toMatchSnapshot();
  });
});
