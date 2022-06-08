// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/openssl/tests/bug76705.phpt
  it("Bug #76705: unusable ssl => peer_fingerprint in stream_context_create()", function () {
    expect(parser.parseCode("<?php\n$serverCode = <<<'CODE'\n    $serverUri = \"ssl://127.0.0.1:64323\";\n    $serverFlags = STREAM_SERVER_BIND | STREAM_SERVER_LISTEN;\n    $serverCtx = stream_context_create(['ssl' => [\n        'local_cert' => __DIR__ . '/bug76705.pem'\n    ]]);\n    $server = stream_socket_server($serverUri, $errno, $errstr, $serverFlags, $serverCtx);\n    phpt_notify();\n    @stream_socket_accept($server, 1);\nCODE;\n$clientCode = <<<'CODE'\n    $serverUri = \"ssl://127.0.0.1:64323\";\n    $clientFlags = STREAM_CLIENT_CONNECT;\n    $clientCtx = stream_context_create(['ssl' => [\n        'verify_peer'       => true,\n        'peer_name'         => 'openssl.php.net',\n        'allow_self_signed' => true,\n        'peer_fingerprint'  => [\n            'sha256' => '4A524F3617E41BCCA1370ED9E89C9A7A83C28F0F342C490296D362869BDF1DA8',\n        ]\n    ]]);\n    phpt_wait();\n    var_dump(stream_socket_client($serverUri, $errno, $errstr, 2, $clientFlags, $clientCtx));\nCODE;\ninclude 'ServerClientTestCase.inc';\nServerClientTestCase::getInstance()->run($clientCode, $serverCode);\n?>")).toMatchSnapshot();
  });
});
