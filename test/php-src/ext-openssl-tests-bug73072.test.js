// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/openssl/tests/bug73072.phpt
  it("Bug #73072: Invalid path SNI_server_certs causes segfault", function () {
    expect(parser.parseCode("<?php\n$serverCode = <<<'CODE'\n    $flags = STREAM_SERVER_BIND|STREAM_SERVER_LISTEN;\n    $ctx = stream_context_create(['ssl' => [\n        'local_cert' => __DIR__ . '/domain1.pem',\n        'SNI_server_certs' => [\n            \"domain1.com\" => __DIR__ . \"/sni_server_domain1.pem\",\n            \"domain2.com\" => __DIR__ . \"/not_existing.pem\",\n        ]\n    ]]);\n    $server = stream_socket_server('tls://127.0.0.1:64322', $errno, $errstr, $flags, $ctx);\n    phpt_notify();\n    @stream_socket_accept($server, 3);\n    // if there is a segfault, this won't be called\n    fwrite(STDERR, \"done\\n\");\nCODE;\n$clientCode = <<<'CODE'\n    $flags = STREAM_CLIENT_CONNECT;\n    $ctxArr = [\n        'cafile' => __DIR__ . '/sni_server_ca.pem',\n        'capture_peer_cert' => true\n    ];\n    phpt_wait();\n    $ctxArr['peer_name'] = 'domain1.com';\n    $ctx = stream_context_create(['ssl' => $ctxArr]);\n    @stream_socket_client(\"tls://127.0.0.1:64322\", $errno, $errstr, 1, $flags, $ctx);\nCODE;\ninclude 'ServerClientTestCase.inc';\nServerClientTestCase::getInstance()->run($clientCode, $serverCode);\n?>")).toMatchSnapshot();
  });
});
