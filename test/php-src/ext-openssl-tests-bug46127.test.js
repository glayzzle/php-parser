// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/openssl/tests/bug46127.phpt
  it("#46127 php_openssl_tcp_sockop_accept forgets to set context on accepted stream", function () {
    expect(parser.parseCode("<?php\n$certFile = __DIR__ . DIRECTORY_SEPARATOR . 'bug46127.pem.tmp';\n$serverCode = <<<'CODE'\n    $serverUri = \"ssl://127.0.0.1:64321\";\n    $serverFlags = STREAM_SERVER_BIND | STREAM_SERVER_LISTEN;\n    $serverCtx = stream_context_create(['ssl' => [\n        'local_cert' => '%s',\n    ]]);\n    $sock = stream_socket_server($serverUri, $errno, $errstr, $serverFlags, $serverCtx);\n    phpt_notify();\n    $link = stream_socket_accept($sock);\n    fwrite($link, \"Sending bug 46127\\n\");\nCODE;\n$serverCode = sprintf($serverCode, $certFile);\n$clientCode = <<<'CODE'\n    $serverUri = \"ssl://127.0.0.1:64321\";\n    $clientFlags = STREAM_CLIENT_CONNECT;\n    $clientCtx = stream_context_create(['ssl' => [\n        'verify_peer' => false,\n        'verify_peer_name' => false\n    ]]);\n    phpt_wait();\n    $sock = stream_socket_client($serverUri, $errno, $errstr, 2, $clientFlags, $clientCtx);\n    echo fgets($sock);\nCODE;\ninclude 'CertificateGenerator.inc';\n$certificateGenerator = new CertificateGenerator();\n$certificateGenerator->saveNewCertAsFileWithKey('bug46127', $certFile);\ninclude 'ServerClientTestCase.inc';\nServerClientTestCase::getInstance()->run($clientCode, $serverCode);\n?>")).toMatchSnapshot();
  });
});
