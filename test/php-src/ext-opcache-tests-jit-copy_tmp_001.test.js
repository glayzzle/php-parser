// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/copy_tmp_001.phpt
  it("JIT COPY_TMP: 001", function () {
    expect(parser.parseCode("<?php\nfunction test() {\n    echo \"\";\n}\n$a = [];\n$a[test()] ??= 1;\nvar_dump($a);\n?>")).toMatchSnapshot();
  });
});
