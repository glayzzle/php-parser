// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/fileinfo/tests/bug67647-mb.phpt
  it("Bug #67647: Bundled libmagic 5.17 does not detect quicktime files correctly", function () {
    expect(parser.parseCode("<?php\n$src = __DIR__ . DIRECTORY_SEPARATOR . \"67647.mov\";\n$f_base = \"67647私はガラスを食べられます.mov\";\n$f = __DIR__ . DIRECTORY_SEPARATOR . $f_base;\n/* Streams mb path support is tested a lot elsewhere. Copy the existing file\n    therefore, avoid duplication in the repo. */\nif (!copy($src, $f) || empty(glob($f))) {\n    die(\"failed to copy '$src' to '$f'\");\n}\n$fi = new finfo(FILEINFO_MIME_TYPE);\nvar_dump($fi->file($f));\n?>\n+++DONE+++")).toMatchSnapshot();
  });
});
