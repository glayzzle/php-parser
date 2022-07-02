// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/array_shortcut_002.phpt
  it("Square bracket associative array shortcut test", function () {
    expect(parser.parseCode("<?php\nprint_r([\"foo\" => \"orange\", \"bar\" => \"apple\", \"baz\" => \"lemon\"]);\n?>")).toMatchSnapshot();
  });
});
