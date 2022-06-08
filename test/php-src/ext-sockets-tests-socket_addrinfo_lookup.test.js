// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sockets/tests/socket_addrinfo_lookup.phpt
  it("Test socket_addrinfo_lookup()", function () {
    expect(parser.parseCode("<?php\ntry {\n    $addrinfo = socket_addrinfo_lookup('127.0.0.1', 2000, array(\n        'ai_family' => AF_INET,\n        'ai_socktype' => SOCK_DGRAM,\n        'invalid' => null,\n    ));\n    var_dump($addrinfo[0]);\n} catch (\\ValueError $e) {\n    echo $e->getMessage(), \\PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
