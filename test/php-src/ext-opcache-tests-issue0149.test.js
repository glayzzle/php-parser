// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/issue0149.phpt
  it("ISSUE #149 (Phar mount points not working this OPcache enabled)", function () {
    expect(parser.parseCode("<?php\n$stub = \"<?php header('Content-Type: text/plain;');\nPhar::mount('this.file', '\". __FILE__ . \"');\necho 'OK\\n';\n__HALT_COMPILER(); ?>\";\n$p = new Phar(__DIR__ . '/issue0149.phar.php', 0, 'this');\n$p['index.php'] = \"\";  # A Phar must have at least one file, hence this dummy\n$p->setStub($stub);\nunset($p);\ninclude \"php_cli_server.inc\";\nphp_cli_server_start('-d opcache.enable=1 -d opcache.enable_cli=1 -d extension=phar.'.PHP_SHLIB_SUFFIX);\necho file_get_contents('http://' . PHP_CLI_SERVER_ADDRESS . '/issue0149.phar.php');\necho file_get_contents('http://' . PHP_CLI_SERVER_ADDRESS . '/issue0149.phar.php');\necho file_get_contents('http://' . PHP_CLI_SERVER_ADDRESS . '/issue0149.phar.php');\n?>")).toMatchSnapshot();
  });
});
