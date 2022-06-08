// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/issue0115.phpt
  it("ISSUE #115 (path issue when using phar)", function () {
    expect(parser.parseCode("<?php\n$stub = '<?php\nPhar::interceptFileFuncs();\nrequire \"phar://this/index.php\";\n__HALT_COMPILER(); ?>';\n$p = new Phar(__DIR__ . '/issue0115_1.phar.php', 0, 'this');\n$p['index.php'] = '<?php\n  echo \"Hello from Index 1.\\n\";\n  require_once \"phar://this/hello.php\";\n';\n$p['hello.php'] = \"Hello World 1!\\n\";\n$p->setStub($stub);\nunset($p);\n$p = new Phar(__DIR__ . '/issue0115_2.phar.php', 0, 'this');\n$p['index.php'] = '<?php\n  echo \"Hello from Index 2.\\n\";\n  require_once \"phar://this/hello.php\";\n';\n$p['hello.php'] = \"Hello World 2!\\n\";\n$p->setStub($stub);\nunset($p);\ninclude \"php_cli_server.inc\";\nphp_cli_server_start('-d opcache.enable=1 -d opcache.enable_cli=1 -d extension=phar.'.PHP_SHLIB_SUFFIX);\necho file_get_contents('http://' . PHP_CLI_SERVER_ADDRESS . '/issue0115_1.phar.php');\necho file_get_contents('http://' . PHP_CLI_SERVER_ADDRESS . '/issue0115_2.phar.php');\n?>")).toMatchSnapshot();
  });
});
