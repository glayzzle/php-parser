// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/curl/tests/bug68937.phpt
  it("Bug # #68937 (Segfault in curl_multi_exec)", function () {
    expect(parser.parseCode("<?php\ninclude 'server.inc';\n$host = curl_cli_server_start();\n$url = \"{$host}/get.inc\";\n$ch = curl_init($url);\ncurl_setopt_array($ch, array(\n    CURLOPT_HEADER => false,\n    CURLOPT_RETURNTRANSFER => true,\n    CURLOPT_POST => true,\n    CURLOPT_INFILESIZE => 1,\n    CURLOPT_HTTPHEADER => array(\n        'Expect:',\n        'Content-Length: 1',\n    ),\n    CURLOPT_READFUNCTION => 'curl_read',\n    CURLOPT_CONNECTTIMEOUT=> 1,\n    CURLOPT_TIMEOUT=>1\n));\nfunction curl_read($ch, $fp, $len) {\n    var_dump($fp);\n    exit;\n}\ncurl_exec($ch);\ncurl_close($ch);\n?>")).toMatchSnapshot();
  });
});
