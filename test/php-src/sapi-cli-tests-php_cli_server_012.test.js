// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/cli/tests/php_cli_server_012.phpt
  it("Bug #60159 (Router returns false, but POST is not passed to requested resource)", function () {
    expect(parser.parseCode("<?php\ninclude \"php_cli_server.inc\";\n$info = php_cli_server_start('print_r($_REQUEST); $_REQUEST[\"foo\"] = \"bar\"; return FALSE;');\n$doc_root = $info->docRoot;\nfile_put_contents($doc_root . '/request.php', '<?php print_r($_REQUEST); ?>');\n$host = PHP_CLI_SERVER_HOSTNAME;\n$fp = php_cli_server_connect();\nif(fwrite($fp, <<<HEADER\nPOST /request.php HTTP/1.1\nHost: {$host}\nContent-Type: application/x-www-form-urlencoded\nContent-Length: 3\na=b\nHEADER\n)) {\n    while (!feof($fp)) {\n        echo fgets($fp);\n    }\n}\nfclose($fp);\n@unlink($doc_root . '/request.php');\n?>")).toMatchSnapshot();
  });
});
