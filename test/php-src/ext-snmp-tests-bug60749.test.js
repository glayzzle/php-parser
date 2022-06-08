// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/snmp/tests/bug60749.phpt
  it("Bug #60749: SNMP module should not strip non-standard SNMP port from hostname", function () {
    expect(parser.parseCode("<?php\nrequire_once(__DIR__.'/snmp_include.inc');\n$hostname = \"php.net\";\n$ip = gethostbyname($hostname);\nif (ip2long($ip) === FALSE) {\n    echo \"Could not resolve $hostname properly!\\n\";\n    exit(1);\n}\n$port = 1161;\n$session = new SNMP(SNMP::VERSION_1, \"$hostname:$port\", $community, $timeout, $retries);\n$info = $session->info;\nif (!str_ends_with($info[\"hostname\"], \":$port\")) {\n    echo \"'\" . $info[\"hostname\"] . \"' != '$ip:$port'\\n\";\n}\nvar_dump($session->close());\n?>")).toMatchSnapshot();
  });
});
