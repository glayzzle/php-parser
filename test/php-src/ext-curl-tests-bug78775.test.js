// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/curl/tests/bug78775.phpt
  it("Bug #78775: TLS issues from HTTP request affecting other encrypted connections", function () {
    expect(parser.parseCode("<?php\n$sock = fsockopen(\"tls://google.com\", 443);\nvar_dump($sock);\n$handle = curl_init('https://self-signed.badssl.com/');\ncurl_setopt_array(\n    $handle,\n    [\n        CURLOPT_RETURNTRANSFER => true,\n        CURLOPT_SSL_VERIFYPEER => true,\n    ]\n);\nvar_dump(curl_exec($handle));\ncurl_close($handle);\nfwrite($sock, \"GET / HTTP/1.0\\n\\n\");\nvar_dump(fread($sock, 8));\n?>")).toMatchSnapshot();
  });
});
