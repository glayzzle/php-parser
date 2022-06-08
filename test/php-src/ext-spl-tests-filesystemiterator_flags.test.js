// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/filesystemiterator_flags.phpt
  it("SPL: FilesystemIterator::getFlags() basic tests", function () {
    expect(parser.parseCode("<?php\n$it = new FileSystemIterator(\".\");\nprintflags($it);\n$it->setFlags(FileSystemIterator::CURRENT_AS_SELF |\n        FileSystemIterator::KEY_AS_FILENAME |\n        FileSystemIterator::SKIP_DOTS |\n        FileSystemIterator::UNIX_PATHS);\nprintflags($it);\n$it->setFlags(-1);\nprintflags($it);\nfunction printflags($it) {\n    printf(\"%08X\\n\", $it->getFlags());\n    printf(\"%08X\\n\", ($it->getFlags() & FileSystemIterator::CURRENT_MODE_MASK));\n    printf(\"%08X\\n\", ($it->getFlags() & FileSystemIterator::KEY_MODE_MASK));\n    printf(\"%08X\\n\", ($it->getFlags() & FileSystemIterator::OTHER_MODE_MASK));\n}\n?>")).toMatchSnapshot();
  });
});
