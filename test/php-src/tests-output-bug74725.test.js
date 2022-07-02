// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/output/bug74725.phpt
  it("Bug #74725: html_errors=1 breaks unhandled exceptions", function () {
    expect(parser.parseCode("<?php\nini_set('display_errors', 1);\nini_set('html_errors', 1);\nini_set('default_charset', \"Windows-1251\");\nthrow new Exception(\"\\xF2\\xE5\\xF1\\xF2\");\n// Note to test reader: this file is in Windows-1251 (vim: `:e ++enc=cp1251`)\n?>")).toMatchSnapshot();
  });
});
