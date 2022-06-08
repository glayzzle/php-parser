// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/opt/coalesce.phpt
  it("COALESCE optimization", function () {
    expect(parser.parseCode("<?php\nfunction a() {\n    $test = $test ?? true;\n    return $test;\n}\nfunction b() {\n    $test ??= true;\n    return $test;\n}\n?>")).toMatchSnapshot();
  });
});
