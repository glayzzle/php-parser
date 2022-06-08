// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/bug24573.phpt
  it("Bug #24573 (debug_backtrace() crashes if $this is set to null)", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n  function Bar() {\n    $__this = $this;\n    $this = null;\n    debug_backtrace();\n    $this = $__this;\n  }\n}\n$f = new Foo;\n$f->Bar();\necho \"OK\\n\";\n?>")).toMatchSnapshot();
  });
});
