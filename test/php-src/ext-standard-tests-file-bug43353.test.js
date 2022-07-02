// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/bug43353.phpt
  it("Bug #43353 wrong detection of 'data' wrapper", function () {
    expect(parser.parseCode("<?php\nvar_dump(is_dir('file:///datafoo:test'));\nvar_dump(is_dir('datafoo:test'));\nvar_dump(file_get_contents('data:text/plain,foo'));\nvar_dump(file_get_contents('datafoo:text/plain,foo'));\n?>")).toMatchSnapshot();
  });
});
