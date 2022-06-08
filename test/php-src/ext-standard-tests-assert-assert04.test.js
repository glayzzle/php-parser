// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/assert/assert04.phpt
  it("misc assert() tests tests", function () {
    expect(parser.parseCode("<?php\n/* Assert not active */\nassert_options(ASSERT_ACTIVE, 0);\nassert(1);\n/* Wrong parameter count in assert */\nassert_options(ASSERT_ACTIVE, 1);\n/* Assert false */\nassert(0);\n/* Assert false and bail*/\nassert_options(ASSERT_BAIL, 1);\nassert(0);\necho \"not reached\\n\";\n?>")).toMatchSnapshot();
  });
});
