// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/bug21758.phpt
  it("Bug #21758 (preg_replace_callback() not working with class methods)", function () {
    expect(parser.parseCode("<?php\n  class Foo {\n    function __construct() {\n      $s = 'preg_replace() is broken';\n      var_dump(preg_replace_callback(\n              '/broken/',\n              array(&$this, 'bar'),\n              $s\n           ));\n    }\n    function bar() {\n      return 'working';\n    }\n  } // of Foo\n  $o = new Foo;\n?>")).toMatchSnapshot();
  });
});
