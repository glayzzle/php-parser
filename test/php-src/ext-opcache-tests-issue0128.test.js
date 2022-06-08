// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/issue0128.phpt
  it("ISSUE #128 (opcache_invalidate segmentation fault)", function () {
    expect(parser.parseCode("<?php\nvar_dump(opcache_invalidate('1'));\nvar_dump(\"okey\");\n?>")).toMatchSnapshot();
  });
});
