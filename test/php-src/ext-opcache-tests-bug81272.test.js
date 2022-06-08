// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/bug81272.phpt
  it("Bug #81272: Segfault in var[] after array_slice with JIT", function () {
    expect(parser.parseCode("<?php\nfunction test() {\n    $newPages = array_slice([], 0, 0);\n    $newPages[] = null;\n}\ntest();\n?>\n===DONE===")).toMatchSnapshot();
  });
});
