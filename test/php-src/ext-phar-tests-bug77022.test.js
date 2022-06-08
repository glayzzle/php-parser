// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/bug77022.phpt
  it("Phar: Bug #77022: PharData always creates new files with mode 0666", function () {
    expect(parser.parseCode("<?php\numask(022);\nvar_dump(decoct(umask()));\n$sFile = tempnam(__DIR__, 'test77022');\nvar_dump(decoct(stat($sFile)['mode']));\nforeach([Phar::TAR => 'tar', Phar::ZIP => 'zip'] as $format => $ext) {\n    clearstatcache();\n    $phar = new PharData(__DIR__ . '/test77022.' . $ext, format: $format);\n    $phar->addFile($sFile, 'test-file-phar');\n    $phar->addFromString(\"test-from-string\", 'test-file-phar');\n    $phar->extractTo(__DIR__);\n    var_dump(decoct(stat(__DIR__ . '/test-file-phar')['mode']));\n    var_dump(decoct(stat(__DIR__ . '/test-from-string')['mode']));\n    unlink(__DIR__ . '/test-file-phar');\n    unlink(__DIR__ . '/test-from-string');\n    unlink(__DIR__ . '/test77022.' . $ext);\n}\nunlink($sFile);\n?>")).toMatchSnapshot();
  });
});
