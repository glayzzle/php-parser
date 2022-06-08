// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/bug76463.phpt
  it("Bug #76463 (var has array key type but not value type)", function () {
    expect(parser.parseCode("<?php\nfunction test() {\n    $old_data = isset($old_data) ? (array)$old_data : [];\n}\n?>\nokey")).toMatchSnapshot();
  });
});
