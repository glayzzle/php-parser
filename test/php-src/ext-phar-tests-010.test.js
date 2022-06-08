// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/010.phpt
  it("Phar::mapPhar buffer overrun", function () {
    expect(parser.parseCode("<?php\n$file = \"<?php\nPhar::mapPhar('hio');\n__HALT_COMPILER(); ?>\";\n// this fails because the manifest length does not include the other 10 byte manifest data\n$manifest = pack('V', 1) . 'a' . pack('VVVVVV', 0, time(), 0, crc32(''), 0x00000000, 0);\n$file .= pack('VVnVV', strlen($manifest), 1, 0x1000, 0x00000000, 3) . 'hio' . pack('V', 0) . $manifest;\nfile_put_contents(__DIR__ . '/' . basename(__FILE__, '.php') . '.phar.php', $file);\ntry {\ninclude __DIR__ . '/' . basename(__FILE__, '.php') . '.phar.php';\necho file_get_contents('phar://hio/a');\n} catch (Exception $e) {\necho $e->getMessage();\n}\n?>")).toMatchSnapshot();
  });
});
