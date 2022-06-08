// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/008.phpt
  it("Phar::mapPhar truncated manifest (not enough for manifest length)", function () {
    expect(parser.parseCode("<?php\n$file = \"<?php\nPhar::mapPhar('hio');\n__HALT_COMPILER(); ?>\";\n$file .= pack('V', 500) . 'notenough';\nfile_put_contents(__DIR__ . '/' . basename(__FILE__, '.php') . '.phar.php', $file);\ntry {\ninclude __DIR__ . '/' . basename(__FILE__, '.php') . '.phar.php';\n} catch (Exception $e) {\necho $e->getMessage();\n}\n?>")).toMatchSnapshot();
  });
});
