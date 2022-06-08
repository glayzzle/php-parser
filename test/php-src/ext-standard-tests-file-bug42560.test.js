// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/bug42560.phpt
  it("Bug #42560 Empty directory argument to tempnam yields open_basedir problems", function () {
    expect(parser.parseCode("<?php\n$tmpdir = sys_get_temp_dir();\nini_set('open_basedir', $tmpdir);\n$tempnam = tempnam('', 'test');\nvar_dump($tempnam !== false);\nvar_dump(file_exists($tempnam));\nif (file_exists($tempnam)) {\n    unlink($tempnam);\n}\n?>")).toMatchSnapshot();
  });
});
