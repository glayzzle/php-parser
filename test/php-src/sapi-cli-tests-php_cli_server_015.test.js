// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/cli/tests/php_cli_server_015.phpt
  it("Bug #60523 (PHP Errors are not reported in browsers using built-in SAPI)", function () {
    expect(parser.parseCode("<?php\ninclude \"php_cli_server.inc\";\n$doc_root = php_cli_server_start('require(\"syntax_error.php\");')->docRoot;\nfile_put_contents($doc_root . \"/syntax_error.php\", \"<?php non_exists_function(); ?>\");\n$output = '';\n$host = PHP_CLI_SERVER_HOSTNAME;\n$fp = php_cli_server_connect();\nif(fwrite($fp, <<<HEADER\nGET /index.php HTTP/1.1\nHost: {$host}\nHEADER\n)) {\n    while (!feof($fp)) {\n        $output .= fgets($fp);\n    }\n}\necho $output;\n@unlink($doc_root . \"/syntax_error.php\");\nfclose($fp);\n?>")).toMatchSnapshot();
  });
});
