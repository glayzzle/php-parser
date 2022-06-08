// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug80724.phpt
  it("Bug #80724 (FOLLOW_SYMLINKS interfering with FilesystemIterator key flags)", function () {
    expect(parser.parseCode("<?php\n$iterator = new FilesystemIterator(__DIR__, FilesystemIterator::KEY_AS_FILENAME);\nforeach ($iterator as $key => $value) {\n    echo var_dump(hasSeparator($key));\n    break;\n}\n$iterator->rewind();\necho var_dump(hasSeparator($iterator->key()));\n$iterator->setFlags(0);\necho var_dump(hasSeparator($iterator->key()));\n$iterator->setFlags(FilesystemIterator::KEY_AS_FILENAME);\necho var_dump(hasSeparator($iterator->key()));\n$iterator2 = new FilesystemIterator(__DIR__, FilesystemIterator::FOLLOW_SYMLINKS | FilesystemIterator::KEY_AS_FILENAME);\nforeach ($iterator2 as $key => $value) {\n    echo var_dump(hasSeparator($key));\n    break;\n}\n$iterator2->rewind();\necho var_dump(hasSeparator($iterator2->key()));\n$iterator2->setFlags(0);\necho var_dump(hasSeparator($iterator2->key()));\n$iterator2->setFlags(FilesystemIterator::KEY_AS_FILENAME);\necho var_dump(hasSeparator($iterator2->key()));\nfunction hasSeparator($key) {\n    return str_contains($key, __DIR__ . DIRECTORY_SEPARATOR);\n}\n?>")).toMatchSnapshot();
  });
});
