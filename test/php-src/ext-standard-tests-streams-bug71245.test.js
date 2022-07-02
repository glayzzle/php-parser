// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/streams/bug71245.phpt
  it("Bug #71245 (file_get_contents() ignores \"header\" context option if it's a reference)", function () {
    expect(parser.parseCode("<?php\n$headers = ['Host: okey.com'];\n$httpContext = [\n    'http' => [\n        'protocol_version'\t=> '1.1',\n        'method'\t\t\t=> 'GET',\n        'header'\t\t\t=> &$headers,\n        'follow_location'\t=> 0,\n        'max_redirects'\t\t=> 0,\n        'ignore_errors'\t\t=> true,\n        'timeout'\t\t\t=> 60,\n    ],\n];\n$context = stream_context_create($httpContext);\n$headers = [\"Host: bad.com\"];\nprint_r(stream_context_get_options($context));\n?>")).toMatchSnapshot();
  });
});
