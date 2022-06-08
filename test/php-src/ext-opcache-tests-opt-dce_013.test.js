// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/opt/dce_013.phpt
  it("Incorrect DCE of FREE", function () {
    expect(parser.parseCode("<?php\nfunction foo() {\n  $a = $r[] = $r = []&$y;\n  list(&$y)=$a;\n}\n?>\nDONE")).toMatchSnapshot();
  });
});
