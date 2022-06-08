// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/cli/tests/php_cli_server_016.phpt
  it("Bug #60591 (Memory leak when access a non-exists file)", function () {
    expect(parser.parseCode("<?php\ninclude \"php_cli_server.inc\";\nphp_cli_server_start(<<<'PHP'\nif (preg_match('/\\.(?:png|jpg|jpeg|gif)$/', $_SERVER[\"REQUEST_URI\"]))\n        return false; // serve the requested resource as-is.\nelse {\n        echo \"here\";\n}\nPHP\n);\n$host = PHP_CLI_SERVER_HOSTNAME;\n$fp = php_cli_server_connect();\nif(fwrite($fp, <<<HEADER\nPOST /no-exists.jpg HTTP/1.1\nHost: {$host}\nHEADER\n)) {\n    while (!feof($fp)) {\n        echo fgets($fp);\n        break;\n    }\n}\nfclose($fp);\n?>")).toMatchSnapshot();
  });
});
