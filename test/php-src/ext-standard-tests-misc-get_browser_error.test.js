// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/misc/get_browser_error.phpt
  it("Test get_browser() function : error functionality", function () {
    expect(parser.parseCode("<?php\n$browsers = include __DIR__ . DIRECTORY_SEPARATOR . 'browsernames.inc';\necho \"*** Testing get_browser() : error functionality ***\\n\";\n/* Unknown browser uses defaults. */\nvar_dump( get_browser( 'foobar', true ) );\n/* Some wrong parameters, no HTTP_USER_AGENT set */\nvar_dump( get_browser( null, 'foobar' ) );\n?>")).toMatchSnapshot();
  });
});
