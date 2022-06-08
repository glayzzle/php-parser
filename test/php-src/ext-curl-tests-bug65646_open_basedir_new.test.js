// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/curl/tests/bug65646_open_basedir_new.phpt
  it("Bug #65646 (re-enable CURLOPT_FOLLOWLOCATION with open_basedir or safe_mode): open_basedir enabled; curl >= 7.19.4", function () {
    expect(parser.parseCode("<?php\n$ch = curl_init();\nvar_dump(curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true));\nvar_dump(curl_setopt($ch, CURLOPT_PROTOCOLS, CURLPROTO_FILE));\nvar_dump(curl_setopt($ch, CURLOPT_REDIR_PROTOCOLS, CURLPROTO_FILE));\ncurl_close($ch);\n?>")).toMatchSnapshot();
  });
});
