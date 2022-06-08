// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/curl/tests/curl_multi_errno_strerror_001.phpt
  it("curl_multi_errno and curl_multi_strerror basic test", function () {
    expect(parser.parseCode("<?php\n$mh = curl_multi_init();\n$errno = curl_multi_errno($mh);\necho $errno . PHP_EOL;\necho curl_multi_strerror($errno) . PHP_EOL;\ntry {\n    curl_multi_setopt($mh, -1, -1);\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\n$errno = curl_multi_errno($mh);\necho $errno . PHP_EOL;\necho curl_multi_strerror($errno) . PHP_EOL;\n?>")).toMatchSnapshot();
  });
});
