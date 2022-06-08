// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/cli/tests/php_cli_server_013.phpt
  it("No router, no script", function () {
    expect(parser.parseCode("<?php\ninclude \"php_cli_server.inc\";\nphp_cli_server_start(NULL, NULL);\n$output = '';\n$host = PHP_CLI_SERVER_HOSTNAME;\n$fp = php_cli_server_connect();\nif(fwrite($fp, <<<HEADER\nPOST / HTTP/1.1\nHost: {$host}\nContent-Type: application/x-www-form-urlencoded\nContent-Length: 3\na=b\nHEADER\n)) {\n    while (!feof($fp)) {\n        $output .= fgets($fp);\n    }\n}\necho preg_replace(\"/<style>(.*?)<\\/style>/s\", \"<style>AAA</style>\", $output), \"\\n\";\nfclose($fp);\n$output = '';\n$fp = php_cli_server_connect();\nif(fwrite($fp, <<<HEADER\nGET /main/style.css HTTP/1.1\nHost: {$host}\nHEADER\n)) {\n    while (!feof($fp)) {\n        $output .= fgets($fp);\n    }\n}\necho preg_replace(\"/<style>(.*?)<\\/style>/s\", \"<style>AAA</style>\", $output), \"\\n\";\nfclose($fp);\n$output = '';\n$fp = php_cli_server_connect();\nif(fwrite($fp, <<<HEADER\nHEAD /main/foo/bar HTTP/1.1\nHost: {$host}\nHEADER\n)) {\n    while (!feof($fp)) {\n        $output .= fgets($fp);\n    }\n}\necho preg_replace(\"/<style>(.*?)<\\/style>/s\", \"<style>AAA</style>\", $output), \"\\n\";\nfclose($fp);\n?>")).toMatchSnapshot();
  });
});
