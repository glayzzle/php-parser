// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/curl/tests/bug71523.phpt
  it("Bug #71523 (Copied handle with new option CURLOPT_HTTPHEADER crashes while curl_multi_exec)", function () {
    expect(parser.parseCode("<?php\n$base = curl_init('http://www.google.com/');\ncurl_setopt($base, CURLOPT_RETURNTRANSFER, true);\n$mh = curl_multi_init();\nfor ($i = 0; $i < 2; ++$i) {\n    $ch = curl_copy_handle($base);\n    curl_setopt($ch, CURLOPT_HTTPHEADER, ['Foo: Bar']);\n    curl_multi_add_handle($mh, $ch);\n}\ndo {\n    curl_multi_exec($mh, $active);\n} while ($active);\n?>\nokey")).toMatchSnapshot();
  });
});
