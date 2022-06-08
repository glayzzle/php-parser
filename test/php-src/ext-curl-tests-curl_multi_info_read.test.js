// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/curl/tests/curl_multi_info_read.phpt
  it("array curl_multi_info_read ( resource $mh [, int &$msgs_in_queue = NULL ] );", function () {
    expect(parser.parseCode("<?php\n$urls = array(\n    \"file://\".__DIR__.\"/curl_testdata1.txt\",\n    \"file://\".__DIR__.\"/curl_testdata2.txt\",\n);\n$mh = curl_multi_init();\nforeach ($urls as $i => $url) {\n    $conn[$i] = curl_init($url);\n    curl_setopt($conn[$i], CURLOPT_RETURNTRANSFER, 1);\n    curl_multi_add_handle($mh, $conn[$i]);\n}\ndo {\n    $status = curl_multi_exec($mh, $active);\n} while ($status === CURLM_CALL_MULTI_PERFORM || $active);\nwhile ($info = curl_multi_info_read($mh)) {\n    var_dump($info);\n}\nforeach ($urls as $i => $url) {\n    curl_close($conn[$i]);\n}\n?>")).toMatchSnapshot();
  });
});
