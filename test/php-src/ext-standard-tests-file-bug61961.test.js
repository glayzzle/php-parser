// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/bug61961.phpt
  it("Bug #61961 (file_get_content leaks when access empty file with max length)", function () {
    expect(parser.parseCode("<?php\n$tmp_empty_file = __FILE__ . \".tmp\";\nfile_put_contents($tmp_empty_file, \"\");\nvar_dump(file_get_contents($tmp_empty_file, false, NULL, 0, 10));\nunlink($tmp_empty_file);\n?>")).toMatchSnapshot();
  });
});
