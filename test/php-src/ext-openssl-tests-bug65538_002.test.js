// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/openssl/tests/bug65538_002.phpt
  it("Bug #65538: SSL context \"cafile\" disallows URL stream wrappers", function () {
    expect(parser.parseCode("<?php\n$clientCtx = stream_context_create(['ssl' => [\n    // We don't get any ca list from php.net but it does not matter as we\n    // care about the fact that the external stream is not allowed.\n    // We can't use http://curl.haxx.se/ca/cacert.pem for this test\n    // as it is redirected to https which means the test would depend\n    // on system cafile when opening stream.\n    'cafile' => 'http://www.nginx.org',\n]]);\nfile_get_contents('https://github.com', false, $clientCtx);\n?>")).toMatchSnapshot();
  });
});
