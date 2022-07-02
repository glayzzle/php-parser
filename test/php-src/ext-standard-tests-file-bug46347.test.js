// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/bug46347.phpt
  it("Bug #46347 (parse_ini_file() doesn't support * in keys)", function () {
    expect(parser.parseCode("<?php\n$str = <<< EOF\n[section]\npart1.*.part2 = 1\nEOF;\n$file = __DIR__ . '/parse.ini';\nfile_put_contents($file, $str);\nvar_dump(parse_ini_file($file));\n?>")).toMatchSnapshot();
  });
});
