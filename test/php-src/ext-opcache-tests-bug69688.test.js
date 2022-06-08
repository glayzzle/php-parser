// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/bug69688.phpt
  it("Bug #69688 (segfault with eval and opcache fast shutdown)", function () {
    expect(parser.parseCode("<?php\neval('function g() {} function g2() {} function g3() {}');\neval('class A{} class B{} class C{}');\n?>\nokey")).toMatchSnapshot();
  });
});
