// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/curl/tests/bug64267.phpt
  it("Bug #64267 (CURLOPT_INFILE doesn't allow reset)", function () {
    expect(parser.parseCode("<?php\necho \"TEST\\n\";\n$c = curl_init(\"http://google.com\");\n$f = fopen(__FILE__,\"r\");\nvar_dump(curl_setopt_array($c, [\n    CURLOPT_RETURNTRANSFER => true,\n    CURLOPT_UPLOAD => true,\n    CURLOPT_INFILE => $f,\n    CURLOPT_INFILESIZE => filesize(__FILE__),\n    CURLOPT_CONNECTTIMEOUT => 3,\n    CURLOPT_TIMEOUT => 3,\n]));\nfclose($f);\nvar_dump(curl_setopt_array($c, [\n    CURLOPT_UPLOAD => false,\n    CURLOPT_INFILE => null,\n    CURLOPT_INFILESIZE => 0,\n]));\ncurl_exec($c);\nvar_dump(curl_getinfo($c, CURLINFO_RESPONSE_CODE));\n?>")).toMatchSnapshot();
  });
});
