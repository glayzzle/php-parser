// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/curl/tests/bug62839.phpt
  it("Bug #62839 (curl_copy_handle segfault with CURLOPT_FILE)", function () {
    expect(parser.parseCode("<?php\n$curl = curl_init();\n$fd = tmpfile();\ncurl_setopt($curl, CURLOPT_FILE, $fd);\ncurl_copy_handle($curl);\necho 'DONE!';\n?>")).toMatchSnapshot();
  });
});
