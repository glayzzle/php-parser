// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/openssl/tests/bug79589.phpt
  it("Bug #65538: TLS unexpected EOF failure", function () {
    expect(parser.parseCode("<?php\n$release = file_get_contents(\n    'https://chromedriver.storage.googleapis.com/LATEST_RELEASE',\n    false,\n    stream_context_create(['ssl' => ['verify_peer'=> false]])\n);\necho gettype($release);\n?>")).toMatchSnapshot();
  });
});
