// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/opt/nullsafe_002.phpt
  it("Nullsafe e-ssa pi node placement", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public int $prop;\n}\nfunction test(?Test $test) {\n    var_dump($test?->prop);\n}\n?>")).toMatchSnapshot();
  });
});
