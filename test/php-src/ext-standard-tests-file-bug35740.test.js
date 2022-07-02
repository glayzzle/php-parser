// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/bug35740.phpt
  it("Bug #35740 (memory leak when including a directory)", function () {
    expect(parser.parseCode("<?php\ninclude (__DIR__);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
