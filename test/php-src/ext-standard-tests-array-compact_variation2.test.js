// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/compact_variation2.phpt
  it("Test compact() function: ensure compact() doesn't pick up variables declared outside of current scope.", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing compact() : usage variations  - variables outside of current scope ***\\n\";\n$a = 'main.a';\n$b = 'main.b';\nfunction f() {\n    $b = 'f.b';\n    $c = 'f.c';\n    var_dump(compact('a','b','c'));\n    var_dump(compact(array('a','b','c')));\n}\nf();\n?>")).toMatchSnapshot();
  });
});
