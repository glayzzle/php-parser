// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/bug79082.phpt
  it("Phar: Bug #79082: Files added to tar with Phar::buildFromIterator have all-access permissions", function () {
    expect(parser.parseCode("<?php\numask(022);\nvar_dump(decoct(umask()));\nchmod(__DIR__ . '/test79082/test79082-testfile', 0644);\nchmod(__DIR__ . '/test79082/test79082-testfile2', 0400);\nforeach([Phar::TAR => 'tar', Phar::ZIP => 'zip'] as $format => $ext) {\n    clearstatcache();\n    $phar = new PharData(__DIR__ . '/test79082.' . $ext, format: $format);\n    $phar->buildFromIterator(new \\RecursiveDirectoryIterator(__DIR__ . '/test79082', \\FilesystemIterator::SKIP_DOTS), __DIR__ . '/test79082');\n    $phar->extractTo(__DIR__);\n    var_dump(decoct(stat(__DIR__ . '/test79082-testfile')['mode']));\n    var_dump(decoct(stat(__DIR__ . '/test79082-testfile2')['mode']));\n    unlink(__DIR__ . '/test79082-testfile');\n    unlink(__DIR__ . '/test79082-testfile2');\n}\nforeach([Phar::TAR => 'tar', Phar::ZIP => 'zip'] as $format => $ext) {\n    clearstatcache();\n    $phar = new PharData(__DIR__ . '/test79082-d.' . $ext, format: $format);\n    $phar->buildFromDirectory(__DIR__ . '/test79082');\n    $phar->extractTo(__DIR__);\n    var_dump(decoct(stat(__DIR__ . '/test79082-testfile')['mode']));\n    var_dump(decoct(stat(__DIR__ . '/test79082-testfile2')['mode']));\n    unlink(__DIR__ . '/test79082-testfile');\n    unlink(__DIR__ . '/test79082-testfile2');\n}\n?>")).toMatchSnapshot();
  });
});
