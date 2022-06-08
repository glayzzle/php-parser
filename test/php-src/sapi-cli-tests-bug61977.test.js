// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/cli/tests/bug61977.phpt
  it("Bug #61977 test CLI web-server support for Mime Type File extensions mapping", function () {
    expect(parser.parseCode("<?php\ninclude \"php_cli_server.inc\";\n$doc_root = php_cli_server_start('<?php ?>', null)->docRoot;\n/*\n * If a Mime Type is added in php_cli_server.c, add it to this array and update\n * the EXPECTF section accordingly\n */\n$mimetypes = ['html', 'htm', 'svg', 'css', 'js', 'png', 'webm', 'ogv', 'ogg'];\nforeach ($mimetypes as $mimetype) {\n    $host = PHP_CLI_SERVER_HOSTNAME;\n    $fp = php_cli_server_connect();\n    if (!$fp) die('Connect failed');\n    file_put_contents($doc_root . \"/foo.{$mimetype}\", '');\n    $header = <<<HEADER\nGET /foo.{$mimetype} HTTP/1.1\nHost: {$host}\nHEADER;\n    if (fwrite($fp, $header)) {\n        while (!feof($fp)) {\n            $text = fgets($fp);\n            if (strncasecmp(\"Content-type:\", $text, 13) == 0) {\n                echo \"foo.{$mimetype} => \", $text;\n            }\n        }\n        @unlink($doc_root . \"/foo.{$mimetype}\");\n        fclose($fp);\n    }\n}\n?>")).toMatchSnapshot();
  });
});
