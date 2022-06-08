// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/cli/tests/php_cli_server_005.phpt
  it("Post a file", function () {
    expect(parser.parseCode("<?php\ninclude \"php_cli_server.inc\";\nphp_cli_server_start('var_dump($_FILES);');\n$host = PHP_CLI_SERVER_HOSTNAME;\n$fp = php_cli_server_connect();\n$post_data = <<<POST\n-----------------------------114782935826962\nContent-Disposition: form-data; name=\"userfile\"; filename=\"laruence.txt\"\nContent-Type: text/plain\nI am not sure about this.\n-----------------------------114782935826962--\nPOST;\n$post_len = strlen($post_data);\nif(fwrite($fp, <<<HEADER\nPOST / HTTP/1.1\nHost: {$host}\nContent-Type: multipart/form-data; boundary=---------------------------114782935826962\nContent-Length: {$post_len}\n{$post_data}\nHEADER\n)) {\n    while (!feof($fp)) {\n        echo fgets($fp);\n    }\n}\n?>")).toMatchSnapshot();
  });
});
