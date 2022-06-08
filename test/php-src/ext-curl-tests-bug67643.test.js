// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/curl/tests/bug67643.phpt
  it("Bug #67643 (curl_multi_getcontent returns '' when RETURNTRANSFER isn't set)", function () {
    expect(parser.parseCode("<?php\n    $ch = curl_init();\n    curl_setopt($ch, CURLOPT_URL, 'file://'. __DIR__ . DIRECTORY_SEPARATOR .'curl_testdata1.txt');\n    curl_setopt($ch, CURLOPT_RETURNTRANSFER, false);\n    $mh = curl_multi_init();\n    curl_multi_add_handle($mh, $ch);\n    $running = 0;\n    do {\n        curl_multi_exec($mh, $running);\n    } while($running > 0);\n    $results = curl_multi_getcontent($ch);\n    curl_multi_remove_handle($mh, $ch);\n    curl_multi_close($mh);\n    var_dump($results);\n?>")).toMatchSnapshot();
  });
});
