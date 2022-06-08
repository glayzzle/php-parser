// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug24699.phpt
  it("Bug #24699 (Memory Leak with per-class constants)", function () {
    expect(parser.parseCode("<?php\nclass TEST { const FOO = SEEK_CUR; };\nclass TEST2 { const FOO = 1; };\nclass TEST3 { const FOO = PHP_VERSION; };\nprint TEST::FOO.\"\\n\";\n?>")).toMatchSnapshot();
  });
});
