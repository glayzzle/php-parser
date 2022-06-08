// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/bug28213.phpt
  it("Bug #28213 (crash in debug_print_backtrace in static methods)", function () {
    expect(parser.parseCode("<?php\nclass FooBar { static function error() { debug_print_backtrace(); } }\nset_error_handler(array('FooBar', 'error'));\ninclude('foobar.php');\n?>")).toMatchSnapshot();
  });
});
