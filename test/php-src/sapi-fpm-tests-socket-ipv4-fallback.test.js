// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/fpm/tests/socket-ipv4-fallback.phpt
  it("FPM: Socket port connection falls back to IPv4", function () {
    expect(parser.parseCode("<?php\nrequire_once \"tester.inc\";\n$cfg = <<<EOT\n[global]\nerror_log = {{FILE:LOG}}\n[unconfined]\nlisten = {{PORT}}\npm = dynamic\npm.max_children = 5\npm.start_servers = 2\npm.min_spare_servers = 1\npm.max_spare_servers = 3\nEOT;\n$tester = new FPM\\Tester($cfg);\n$port = $tester->getPort();\n// Occupy our port and let things fail\n$busy = stream_socket_server(\"tcp://[::]:$port\");\n$tester->start();\n$tester->expectLogNotice('Failed implicitly binding to ::, retrying with 0.0.0.0');\n$tester->expectLogError(\"unable to bind listening socket for address '$port': \" .\n    'Address already in use \\(\\d+\\)');\n$tester->expectLogError('FPM initialization failed');\n$tester->close(true);\n?>\nDone")).toMatchSnapshot();
  });
});
