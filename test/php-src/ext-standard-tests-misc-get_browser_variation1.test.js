// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/misc/get_browser_variation1.phpt
  it("Test get_browser() function : variation functionality: extra browser names", function () {
    expect(parser.parseCode("<?php\n$browsers = include __DIR__ . DIRECTORY_SEPARATOR . 'browsernames.inc';\necho \"*** Testing get_browser() : variation functionality: extra browser names ***\\n\";\n$count = count( $browsers );\nfor( $x = 20; $x < $count; $x++) {\n    var_dump( get_browser( $browsers[$x], true ) );\n}\n?>")).toMatchSnapshot();
  });
});
