// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/opt/dce_003.phpt
  it("DCE 003: Assignment elimination (without FREE)", function () {
    expect(parser.parseCode("<?php\nfunction foo(int $a) {\n    $b = $a += 3;\n    return $a;\n}\n?>")).toMatchSnapshot();
  });
});
