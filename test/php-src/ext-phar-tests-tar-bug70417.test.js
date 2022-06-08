// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/tar/bug70417.phpt
  it("Bug #70417 (PharData::compress() doesn't close temp file)", function () {
    expect(parser.parseCode("<?php\nfunction countOpenFiles() {\n    exec('lsof -p ' . escapeshellarg(getmypid()) . ' 2> /dev/null', $out);  // Note: valgrind can produce false positives for /usr/bin/lsof\n    return count($out);\n}\n$filename = __DIR__ . '/bug70417.tar';\n@unlink(\"$filename.gz\");\n$openFiles1 = countOpenFiles();\n$arch = new PharData($filename);\n$arch->addFromString('foo', 'bar');\n$arch->compress(Phar::GZ);\nunset($arch);\n$openFiles2 = countOpenFiles();\nvar_dump($openFiles1 === $openFiles2);\n?>")).toMatchSnapshot();
  });
});
