// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/tar/links2.phpt
  it("Phar: tar with hard link to nowhere", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.tar';\n$pname = 'phar://' . $fname;\ninclude __DIR__ . '/files/corrupt_tarmaker.php.inc';\n$a = new corrupt_tarmaker($fname, 'none');\n$a->init();\n$a->addFile('hardlink', 'internal/file.txt', array(\n                    'mode' => 0xA000 + 0644,\n                    'uid' => 0,\n                    'gid' => 0,\n                    'size' => 0,\n                    'mtime' => time(),\n                ));\n$a->close();\ntry {\n    $p = new PharData($fname);\n} catch (Exception $e) {\n    echo $e->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
