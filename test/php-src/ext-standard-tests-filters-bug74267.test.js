// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/filters/bug74267.phpt
  it("Bug #74267 (segfault with streams and invalid data)", function () {
    expect(parser.parseCode("<?php\n$stream = fopen('php://memory', 'w');\nstream_filter_append($stream, 'convert.quoted-printable-decode', STREAM_FILTER_WRITE, ['line-break-chars' => \"\\r\\n\"]);\n$lines = [\n    \"\\r\\n\",\n    \" -=()\\r\\n\",\n    \" -=\\r\\n\",\n    \"\\r\\n\"\n    ];\nforeach ($lines as $line) {\n    fwrite($stream, $line);\n}\nfclose($stream);\necho \"done\\n\";\n?>")).toMatchSnapshot();
  });
});
