// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/streams/bug64166_3.phpt
  it("Bug #64166: quoted-printable-encode stream filter incorrectly discarding whitespace - writes", function () {
    expect(parser.parseCode("<?php\nfunction test_64166($data) {\n    $fd = fopen('php://temp', 'w+');\n    $res = stream_filter_append($fd, 'convert.quoted-printable-encode', STREAM_FILTER_WRITE, array(\n        'line-break-chars' => \"\\n\",\n        'line-length' => 74\n    ));\n    fwrite($fd, $data);\n    rewind($fd);\n    var_dump(stream_get_contents($fd, -1, 0));\n    stream_filter_remove($res);\n    rewind($fd);\n    stream_filter_append($fd, 'convert.quoted-printable-encode', STREAM_FILTER_WRITE, array(\n        'line-break-chars' => \"\\n\",\n        'line-length' => 6\n    ));\n    fwrite($fd, $data);\n    rewind($fd);\n    var_dump(stream_get_contents($fd, -1, 0));\n    fclose($fd);\n}\ntest_64166(\"FIRST \\nSECOND\");\ntest_64166(\"FIRST  \\nSECOND\");\n?>")).toMatchSnapshot();
  });
});
