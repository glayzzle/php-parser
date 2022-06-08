// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/curl/tests/bug48203.phpt
  it("Bug #48203 (Crash when CURLOPT_STDERR is set to regular file)", function () {
    expect(parser.parseCode("<?php\ninclude 'server.inc';\n$fp = fopen(__DIR__ . '/bug48203.tmp', 'w');\n$ch = curl_init();\ncurl_setopt($ch, CURLOPT_VERBOSE, 1);\ncurl_setopt($ch, CURLOPT_STDERR, $fp);\ncurl_setopt($ch, CURLOPT_URL, curl_cli_server_start());\nfclose($fp); // <-- premature close of $fp caused a crash!\ncurl_exec($ch);\ncurl_close($ch);\necho \"Ok\\n\";\n?>")).toMatchSnapshot();
  });
});
