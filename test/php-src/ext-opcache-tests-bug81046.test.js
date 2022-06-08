// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/bug81046.phpt
  it("Bug #81046: Literal compaction merges non-equal related literals", function () {
    expect(parser.parseCode("<?php\nclass Test {\n\tstatic function methoD() {\n        echo \"Method called\\n\";\n\t}\n}\nconst methoD = 1;\nvar_dump(methoD);\ntest::methoD();\n?>")).toMatchSnapshot();
  });
});
