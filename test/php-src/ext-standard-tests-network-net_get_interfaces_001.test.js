// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/network/net_get_interfaces_001.phpt
  it("net_get_interfaces IPv4 Loopback", function () {
    expect(parser.parseCode("<?php\n// Test that we have exactly one unicast address with the address 127.0.0.1\n// On linux this will often be named \"lo\", but even that isn't guaranteed.\n$ifaces = net_get_interfaces();\n$found = false;\nforeach ($ifaces as $iface) {\n  foreach ($iface['unicast'] as $unicast) {\n    if (($unicast['address'] ?? null) === '127.0.0.1') {\n      $found = true;\n      break 2;\n    }\n  }\n}\nvar_dump($found);\nif (!$found) {\n  // Extra diagnostics!\n  var_dump($ifaces);\n}\n?>")).toMatchSnapshot();
  });
});
