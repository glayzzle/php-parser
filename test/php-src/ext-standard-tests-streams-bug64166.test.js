// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/streams/bug64166.phpt
  it("Bug #64166: quoted-printable-encode stream filter incorrectly discarding whitespace", function () {
    expect(parser.parseCode("<?php\nfunction test_64166($data) {\n    $fd = fopen('php://temp', 'w+');\n    fwrite($fd, $data);\n    rewind($fd);\n    $res = stream_filter_append($fd, 'convert.quoted-printable-encode', STREAM_FILTER_READ, array(\n        'line-break-chars' => \"\\n\",\n        'line-length' => 74\n    ));\n    var_dump(stream_get_contents($fd, -1, 0));\n    stream_filter_remove($res);\n    rewind($fd);\n    stream_filter_append($fd, 'convert.quoted-printable-encode', STREAM_FILTER_READ, array(\n        'line-break-chars' => \"\\n\",\n        'line-length' => 6\n    ));\n    var_dump(stream_get_contents($fd, -1, 0));\n    fclose($fd);\n}\ntest_64166(\"FIRST \\nSECOND\");\ntest_64166(\"FIRST  \\nSECOND\");\n?>")).toMatchSnapshot();
  });
});
