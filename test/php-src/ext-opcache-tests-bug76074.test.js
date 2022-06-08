// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/bug76074.phpt
  it("Bug #76074 (opcache corrupts variable in for-loop)", function () {
    expect(parser.parseCode("<?php\nfunction test(int $nr) {\n    for ($i = $nr; $i <= $nr + 1; $i++)\n        var_dump($i);\n}\ntest(1);\n?>")).toMatchSnapshot();
  });
});
