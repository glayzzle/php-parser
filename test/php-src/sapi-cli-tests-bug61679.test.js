// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/cli/tests/bug61679.phpt
  it("Bug #61679 (Error on non-standard HTTP methods)", function () {
    expect(parser.parseCode("<?php\ninclude \"php_cli_server.inc\";\nphp_cli_server_start(<<<'PHP'\necho \"This should never echo\";\nPHP\n);\n$host = PHP_CLI_SERVER_HOSTNAME;\n$fp = php_cli_server_connect();\n// Send a request with a fictitious request method,\n// I like smurfs, the smurf everything.\nif(fwrite($fp, <<<HEADER\nSMURF / HTTP/1.1\nHost: {$host}\nHEADER\n)) {\n    while (!feof($fp)) {\n        echo fgets($fp);\n        // Only echo the first line from the response,\n        // the rest is not interesting\n        break;\n    }\n}\nfclose($fp);\n?>")).toMatchSnapshot();
  });
});
