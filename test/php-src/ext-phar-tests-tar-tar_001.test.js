// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/tar/tar_001.phpt
  it("Phar: tar-based phar corrupted", function () {
    expect(parser.parseCode("<?php\ninclude __DIR__ . '/files/make_invalid_tar.php.inc';\n$tar = new corrupter(__DIR__ . '/tar_001.phar.tar', 'none');\n$tar->init();\n$tar->addFile('tar_001.phpt', __FILE__);\n$tar->close();\n$tar = fopen('phar://' . __DIR__ . '/tar_001.phar.tar/tar_001.phpt', 'rb');\ntry {\n    $phar = new Phar(__DIR__ . '/tar_001.phar.tar');\n    echo \"should not execute\\n\";\n} catch (Exception $e) {\n    echo $e->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
