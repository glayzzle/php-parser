// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/misc/get_browser_basic.phpt
  it("Test get_browser() function : basic functionality", function () {
    expect(parser.parseCode("<?php\n$browsers = include __DIR__ . DIRECTORY_SEPARATOR . 'browsernames.inc';\necho \"*** Testing get_browser() : basic functionality ***\\n\";\nfor( $x = 0; $x < 20; $x++) {\n    var_dump( get_browser( $browsers[$x], true ) );\n}\n?>")).toMatchSnapshot();
  });
});
