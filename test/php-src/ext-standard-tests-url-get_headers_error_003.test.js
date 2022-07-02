// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/url/get_headers_error_003.phpt
  it("Test get_headers() function : test with context", function () {
    expect(parser.parseCode("<?php\ninclude __DIR__.\"/../../../../sapi/cli/tests/php_cli_server.inc\";\nphp_cli_server_start('header(\"X-Request-Method: \".$_SERVER[\"REQUEST_METHOD\"]);');\n$opts = array(\n  'http' => array(\n    'method' => 'HEAD'\n  )\n);\n$context = stream_context_create($opts);\n$headers = get_headers(\"http://\".PHP_CLI_SERVER_ADDRESS, 1, $context);\necho $headers[\"X-Request-Method\"].\"\\n\";\nstream_context_set_default($opts);\n$headers = get_headers(\"http://\".PHP_CLI_SERVER_ADDRESS, 1);\necho $headers[\"X-Request-Method\"].\"\\n\";\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
