// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/openssl/tests/san_peer_matching.phpt
  it("Peer verification matches SAN names", function () {
    expect(parser.parseCode("<?php\n$certFile = __DIR__ . DIRECTORY_SEPARATOR . 'san_peer_matching.pem.tmp';\n$san = 'DNS:example.org, DNS:www.example.org, DNS:test.example.org';\n$serverCode = <<<'CODE'\n    $serverUri = \"ssl://127.0.0.1:64321\";\n    $serverFlags = STREAM_SERVER_BIND | STREAM_SERVER_LISTEN;\n    $serverCtx = stream_context_create(['ssl' => [\n        'local_cert' => '%s',\n    ]]);\n    $server = stream_socket_server($serverUri, $errno, $errstr, $serverFlags, $serverCtx);\n    phpt_notify();\n    @stream_socket_accept($server, 1);\n    @stream_socket_accept($server, 1);\nCODE;\n$serverCode = sprintf($serverCode, $certFile);\n$clientCode = <<<'CODE'\n    $serverUri = \"ssl://127.0.0.1:64321\";\n    $clientFlags = STREAM_CLIENT_CONNECT;\n    $clientCtx = stream_context_create(['ssl' => [\n        'verify_peer' => false,\n    ]]);\n    phpt_wait();\n    stream_context_set_option($clientCtx, 'ssl', 'peer_name', 'example.org');\n    var_dump(stream_socket_client($serverUri, $errno, $errstr, 1, $clientFlags, $clientCtx));\n    stream_context_set_option($clientCtx, 'ssl', 'peer_name', 'moar.example.org');\n    var_dump(stream_socket_client($serverUri, $errno, $errstr, 1, $clientFlags, $clientCtx));\nCODE;\ninclude 'CertificateGenerator.inc';\n$certificateGenerator = new CertificateGenerator();\n$certificateGenerator->saveNewCertAsFileWithKey(null, $certFile, null, $san);\ninclude 'ServerClientTestCase.inc';\nServerClientTestCase::getInstance()->run($clientCode, $serverCode);\n?>")).toMatchSnapshot();
  });
});
