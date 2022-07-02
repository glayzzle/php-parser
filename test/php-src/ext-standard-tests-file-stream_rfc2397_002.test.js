// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/stream_rfc2397_002.phpt
  it("Stream: RFC2397 getting meta data", function () {
    expect(parser.parseCode("<?php\n$streams = array(\n    'data://,',\n    'data://',\n    'data://;base64,',\n    'data://;base64',\n    'data://foo,',\n    'data://foo=bar,',\n    'data://text/plain,',\n    'data://text/plain;foo,',\n    'data://text/plain;foo=bar,',\n    'data://text/plain;foo=bar;bla,',\n    'data://text/plain;foo=bar;base64,',\n    'data://text/plain;foo=bar;bar=baz',\n    'data://text/plain;foo=bar;bar=baz,',\n    );\nforeach($streams as $stream)\n{\n    $stream = fopen($stream, 'r');\n    if ($stream) {\n        $meta = stream_get_meta_data($stream);\n        var_dump($meta);\n        var_dump(isset($meta['foo']) ? $meta['foo'] : null);\n    }\n}\n?>")).toMatchSnapshot();
  });
});
