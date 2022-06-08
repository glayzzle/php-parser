// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/bug79787.phpt
  it("Bug #79787 mb_strimwidth does not trim string", function () {
    expect(parser.parseCode("<?php\necho mb_strimwidth(\"一二三\", 0, 4, '.', 'UTF-8').\"\\n\";\necho mb_strimwidth(\"一二三\", 0, 5, '.', 'UTF-8').\"\\n\";\necho mb_strimwidth(\"一二三\", 0, 6, '.', 'UTF-8').\"\\n\";\necho mb_strimwidth(\"abcdef\", 0, 4, '.', 'UTF-8').\"\\n\";\necho mb_strimwidth(\"abcdef\", 0, 5, '.', 'UTF-8').\"\\n\";\necho mb_strimwidth(\"abcdef\", 0, 6, '.', 'UTF-8').\"\\n\";\n?>")).toMatchSnapshot();
  });
});
