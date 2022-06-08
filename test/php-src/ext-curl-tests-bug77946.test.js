// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/curl/tests/bug77946.phpt
  it("Bug #77946 (Errored cURL resources returned by curl_multi_info_read() must be compatible with curl_errno() and curl_error())", function () {
    expect(parser.parseCode("<?php\n$urls = array(\n   'unknown://scheme.tld',\n);\n$mh = curl_multi_init();\nforeach ($urls as $i => $url) {\n    $conn[$i] = curl_init($url);\n    curl_multi_add_handle($mh, $conn[$i]);\n}\ndo {\n    $status = curl_multi_exec($mh, $active);\n    $info = curl_multi_info_read($mh);\n    if (false !== $info) {\n        var_dump($info['result']);\n        var_dump(curl_errno($info['handle']));\n        var_dump(curl_error($info['handle']));\n    }\n} while ($status === CURLM_CALL_MULTI_PERFORM || $active);\nforeach ($urls as $i => $url) {\n    curl_close($conn[$i]);\n}\ncurl_multi_close($mh);\n?>")).toMatchSnapshot();
  });
});
