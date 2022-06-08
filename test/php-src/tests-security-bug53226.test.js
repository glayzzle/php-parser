// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/security/bug53226.phpt
  it("Bug #53226 (file_exists fails on big filenames)", function () {
    expect(parser.parseCode("<?php\nrequire_once \"open_basedir.inc\";\ncreate_directories();\nvar_dump(file_exists('./test/ok/ok.txt'));\nvar_dump(file_exists('./test/foo'));\n$file = str_repeat('x', 2 * PHP_MAXPATHLEN);\nvar_dump(file_exists(\"./test/$file\"));\n?>")).toMatchSnapshot();
  });
});
