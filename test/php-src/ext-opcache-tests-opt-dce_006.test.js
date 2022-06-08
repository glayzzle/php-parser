// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/opt/dce_006.phpt
  it("DCE 006: Objects with destructors escape", function () {
    expect(parser.parseCode("<?php\nclass A {\n    function __destruct() {}\n}\nfunction foo(int $x) {\n    $a = new A;\n    $a->foo = $x;\n}\n?>")).toMatchSnapshot();
  });
});
