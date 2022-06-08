// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/opt/dce_008.phpt
  it("DCE 008: Escaping of enclosed arrays doesn't prevent removal of enclosing array", function () {
    expect(parser.parseCode("<?php\nfunction esc(int $x) {\n        $a[0] = $x;\n        $b[0] = $a;\n        return $a;\n}\n?>")).toMatchSnapshot();
  });
});
