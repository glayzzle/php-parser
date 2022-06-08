// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/bug75687.phpt
  it("Bug #75687 (var 8 (TMP) has array key type but not value type)", function () {
    expect(parser.parseCode("<?php\nfunction x($y)\n{\n    if (is_array($y)) {\n        $z = is_array($y) ? array() : array($y);\n    }\n}\n?>\nokey")).toMatchSnapshot();
  });
});
