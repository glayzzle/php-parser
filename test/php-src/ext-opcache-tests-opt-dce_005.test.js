// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/opt/dce_005.phpt
  it("DCE 005: Elimination of assignment to non-escaping objects (can't remove NEW yet)", function () {
    expect(parser.parseCode("<?php\nclass A {\n}\nfunction foo(int $x) {\n    $a = new A;\n    $a->foo = $x;\n}\n?>")).toMatchSnapshot();
  });
});
