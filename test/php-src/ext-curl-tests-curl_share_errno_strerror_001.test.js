// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/curl/tests/curl_share_errno_strerror_001.phpt
  it("curl_share_errno and curl_share_strerror basic test", function () {
    expect(parser.parseCode("<?php\n$sh = curl_share_init();\n$errno = curl_share_errno($sh);\necho $errno . PHP_EOL;\necho curl_share_strerror($errno) . PHP_EOL;\ntry {\n    curl_share_setopt($sh, -1, -1);\n} catch (ValueError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n$errno = curl_share_errno($sh);\necho $errno . PHP_EOL;\necho curl_share_strerror($errno) . PHP_EOL;\n?>")).toMatchSnapshot();
  });
});
