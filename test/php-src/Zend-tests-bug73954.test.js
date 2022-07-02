// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug73954.phpt
  it("Bug #73954 (NAN check fails on Alpine Linux with musl)", function () {
    expect(parser.parseCode("<?php\nvar_dump(NAN);\nvar_dump(is_nan(NAN));\nfunction takes_int(int $int) {\n}\ntakes_int(log(tan(3.14)));\n?>")).toMatchSnapshot();
  });
});
