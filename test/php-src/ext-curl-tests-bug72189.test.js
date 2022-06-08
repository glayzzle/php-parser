// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/curl/tests/bug72189.phpt
  it("Request #72189 (Add missing CURL_VERSION_* constants)", function () {
    expect(parser.parseCode("<?php\n$version = curl_version();\n$bitfields = [\n    CURL_VERSION_ASYNCHDNS,\n    CURL_VERSION_CONV,\n    CURL_VERSION_CURLDEBUG,\n    CURL_VERSION_DEBUG,\n    CURL_VERSION_GSSNEGOTIATE,\n    CURL_VERSION_IDN,\n    CURL_VERSION_IPV6,\n    CURL_VERSION_KERBEROS4,\n    CURL_VERSION_LARGEFILE,\n    CURL_VERSION_LIBZ,\n    CURL_VERSION_NTLM,\n    CURL_VERSION_SPNEGO,\n    CURL_VERSION_SSL,\n    CURL_VERSION_SSPI,\n];\n$matchesCount = 0;\nforeach ($bitfields as $feature) {\n    if ($version['features'] & $feature) {\n        ++$matchesCount;\n    }\n}\nvar_dump($matchesCount > 0);\n?>")).toMatchSnapshot();
  });
});
