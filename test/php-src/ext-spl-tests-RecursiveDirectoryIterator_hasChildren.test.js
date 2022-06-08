// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/RecursiveDirectoryIterator_hasChildren.phpt
  it("SPL: RecursiveDirectoryIterator::hasChildren() follow symlinks test", function () {
    expect(parser.parseCode("<?php\n$dir = __DIR__ . DIRECTORY_SEPARATOR . 'symlinktest';\nif (!mkdir($dir)) {\n    die('Failed to create temporary directory for testing');\n} elseif (!symlink(__DIR__, $dir . DIRECTORY_SEPARATOR . 'symlink')) {\n    die('Failed to create symbolic link');\n}\n$it = new RecursiveDirectoryIterator($dir, FilesystemIterator::SKIP_DOTS | FilesystemIterator::FOLLOW_SYMLINKS | FilesystemIterator::KEY_AS_FILENAME);\nvar_dump($it->key());\nvar_dump($it->hasChildren());\n$it->setFlags(FilesystemIterator::SKIP_DOTS | FilesystemIterator::KEY_AS_FILENAME);\nvar_dump($it->key());\nvar_dump($it->hasChildren());\n?>")).toMatchSnapshot();
  });
});
