// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug45866.phpt
  it("Bug #45866 (decimal values fed to DateTime->modify() causes long execution times)", function () {
    expect(parser.parseCode("<?php\n$date = new DateTime( '2009-07-29 16:44:23 Europe/London' );\n$date->modify( \"+1.61538461538 day\" );\necho $date->format( 'r' ), \"\\n\";\n$date = new DateTime( '2009-07-29 16:44:23 Europe/London' );\n$date->modify( \"61538461538 day\" );\necho $date->format( 'r' ), \"\\n\";\n$date = new DateTime( '2009-07-29 16:44:23 Europe/London' );\n$date->modify( \"£61538461538 day\" );\necho $date->format( 'r' ), \"\\n\";\n?>")).toMatchSnapshot();
  });
});
