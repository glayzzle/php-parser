// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/RecursiveDirectoryIterator_getSubPathname_basic.phpt
  it("RecursiveDirectoryIterator::getBasePathname() - basic test", function () {
    expect(parser.parseCode("<?php\n$depth0 = \"depth02\";\n$depth1 = \"depth1\";\n$depth2 = \"depth2\";\n$targetDir = __DIR__ . DIRECTORY_SEPARATOR . $depth0 . DIRECTORY_SEPARATOR . $depth1 . DIRECTORY_SEPARATOR . $depth2;\nmkdir($targetDir, 0777, true);\ntouch($targetDir . DIRECTORY_SEPARATOR . 'getSubPathname_test_2.tmp');\ntouch(__DIR__ . DIRECTORY_SEPARATOR . $depth0 . DIRECTORY_SEPARATOR . $depth1 . DIRECTORY_SEPARATOR . 'getSubPathname_test_3.tmp');\ntouch(__DIR__ . DIRECTORY_SEPARATOR . $depth0 . DIRECTORY_SEPARATOR . 'getSubPathname_test_1.tmp');\n$iterator = new RecursiveDirectoryIterator(__DIR__ . DIRECTORY_SEPARATOR . $depth0);\n$it = new RecursiveIteratorIterator($iterator);\n$list = [];\n$it->rewind(); //see https://bugs.php.net/bug.php?id=62914\nwhile($it->valid()) {\n  $list[] = $it->getSubPathname();\n  $it->next();\n}\nasort($list);\nforeach ($list as $item) {\n    echo $item . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
