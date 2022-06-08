// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/bug52013.phpt
  it("Test for bug 52013 about Phar::decompressFiles().", function () {
    expect(parser.parseCode("<?php\nmkdir(__DIR__ . '/testdir');\nfile_put_contents(__DIR__ . '/testdir/1.php', str_repeat(' ', 1455));\n$phar = new Phar(__DIR__ . '/compressed.phar');\n$phar->buildFromDirectory(__DIR__ . '/testdir', '/\\.php$/');\n$phar->setSignatureAlgorithm(Phar::SHA1);\n$phar->compressFiles(Phar::GZ);\n$phar->decompressFiles();\necho 'ok';\n?>")).toMatchSnapshot();
  });
});
