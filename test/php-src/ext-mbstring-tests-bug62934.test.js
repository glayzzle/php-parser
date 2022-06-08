// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/bug62934.phpt
  it("Bug #62934: mb_convert_kana() does not convert iteration marks", function () {
    expect(parser.parseCode("<?php\necho mb_convert_kana('あゝすゞめアヽスヾメ', 'C', 'UTF-8') . \"\\n\";\necho mb_convert_kana('あゝすゞめアヽスヾメ', 'c', 'UTF-8') . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
