// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug68825.phpt
  it("Bug #68825 (Exception in DirectoryIterator::getLinkTarget())", function () {
    expect(parser.parseCode("<?php\n$dir = __DIR__ . '/bug68825';\nif (!mkdir($dir)) {\n    die('Failed to create temporary directory for testing');\n} else if (!symlink(__FILE__, $dir . '/bug')) {\n    die('Failed to create symbolic link');\n}\n$di = new \\DirectoryIterator($dir);\nforeach ($di as $entry) {\n    if ('bug' === $entry->getFilename()) {\n        var_dump($entry->getLinkTarget());\n    }\n}\n?>")).toMatchSnapshot();
  });
});
