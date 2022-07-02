// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/halt_compiler2.phpt
  it("__HALT_COMPILER(); 2 files", function () {
    expect(parser.parseCode("<?php\n$text = \"<?php echo 'test'; var_dump(__COMPILER_HALT_OFFSET__); __HALT_COMPILER(); ?>\nhi there\";\nfile_put_contents(__DIR__ . '/test1.php', $text);\n$text = \"<?php echo 'test2'; var_dump(__COMPILER_HALT_OFFSET__); __HALT_COMPILER(); ?>\nhi there 2\";\nfile_put_contents(__DIR__ . '/test2.php', $text);\ninclude __DIR__ . '/test1.php';\ninclude __DIR__ . '/test2.php';\n?>")).toMatchSnapshot();
  });
});
