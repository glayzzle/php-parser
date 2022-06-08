// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/opt/dce_007.phpt
  it("DCE 007: Escaping of enclosed arrays doesn't prevent removal of enclosing array", function () {
    expect(parser.parseCode("<?php\nfunction esc($x) {\n        $a = [$x];\n        $b = [$a];\n        return $a;\n}\n?>")).toMatchSnapshot();
  });
});
