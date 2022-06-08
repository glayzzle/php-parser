// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/curl/tests/bug52827.phpt
  it("Bug #52827 (curl_setopt with CURLOPT_STDERR erroneously increments the resource refcount)", function () {
    expect(parser.parseCode("<?php\n$s = fopen('php://temp/maxmemory=1024','wb+');\n/* force conversion of inner stream to STDIO.\n * This is not necessary in Windows because the\n * cast to a FILE* handle in curl_setopt already\n * forces the conversion in that platform. The\n * reason for this conversion is that the memory\n * stream has an ugly but working mechanism to\n * prevent being double freed when it's encapsulated,\n * while STDIO streams don't. */\n$i = 0;\nwhile ($i++ < 5000) {\nfwrite($s, str_repeat('a',1024));\n}\n$handle=curl_init('http://www.example.com');\ncurl_setopt($handle, CURLOPT_STDERR, $s);\necho \"Done.\";\n?>")).toMatchSnapshot();
  });
});
