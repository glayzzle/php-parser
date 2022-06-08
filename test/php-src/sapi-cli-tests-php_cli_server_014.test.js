// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/cli/tests/php_cli_server_014.phpt
  it("Bug #60477: Segfault after two multipart/form-data POST requestes", function () {
    expect(parser.parseCode("<?php\ninclude \"php_cli_server.inc\";\nphp_cli_server_start('echo \"done\\n\";', null);\n$output = '';\n$host = PHP_CLI_SERVER_HOSTNAME;\n$fp = php_cli_server_connect();\nif(fwrite($fp, <<<HEADER\nPOST /index.php HTTP/1.1\nHost: {$host}\nContent-Type: multipart/form-data; boundary=---------123456789\nContent-Length: 70\n---------123456789\nContent-Type: application/x-www-form-urlencoded\na=b\nHEADER\n)) {\n    while (!feof($fp)) {\n        $output .= fgets($fp);\n    }\n}\nfclose($fp);\n$fp = php_cli_server_connect();\nif(fwrite($fp, <<<HEADER\nPOST /main/no-exists.php HTTP/1.1\nHost: {$host}\nContent-Type: multipart/form-data; boundary=---------123456789\nContent-Length: 70\n---------123456789\nContent-Type: application/x-www-form-urlencoded\na=b\nHEADER\n)) {\n    while (!feof($fp)) {\n        $output .= fgets($fp);\n    }\n}\necho preg_replace(\"/<style>(.*?)<\\/style>/s\", \"<style>AAA</style>\", $output), \"\\n\";\nfclose($fp);\n?>")).toMatchSnapshot();
  });
});
