// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/curl/tests/bug68089.phpt
  it("Bug #68089 (NULL byte injection - cURL lib)", function () {
    expect(parser.parseCode("<?php\n$url = \"file:///etc/passwd\\0http://google.com\";\n$ch = curl_init();\ntry {\n    curl_setopt($ch, CURLOPT_URL, $url);\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\n?>\nDone")).toMatchSnapshot();
  });
});
