// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/bug76711.phpt
  it("Bug #76711 OPcache enabled triggers false-positive \"Illegal string offset\"", function () {
    expect(parser.parseCode("<?php\nfunction test($foo) {\n    var_dump(0);\n    var_dump($foo[0]);\n}\ntest(\"str\");\n?>")).toMatchSnapshot();
  });
});
