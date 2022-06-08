// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/009.phpt
  it("Phar::mapPhar too many manifest entries", function () {
    expect(parser.parseCode("<?php\n$file = \"<?php\nPhar::mapPhar('hio');\n__HALT_COMPILER(); ?>\";\n$file .= pack('VVnVVV', 500, 500, 0x1000, 0x00000000, 0, 0) .  str_repeat('A', 500);\nfile_put_contents(__DIR__ . '/' . basename(__FILE__, '.php') . '.phar.php', $file);\ntry {\ninclude __DIR__ . '/' . basename(__FILE__, '.php') . '.phar.php';\n} catch (Exception $e) {\necho $e->getMessage();\n}\n?>")).toMatchSnapshot();
  });
});
