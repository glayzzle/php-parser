// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/streams/bug64166_2.phpt
  it("Bug #64166: quoted-printable-encode stream filter incorrectly discarding whitespace - split reads", function () {
    expect(parser.parseCode("<?php\nfunction test_64166($data) {\n    $fd = fopen('php://temp', 'w+');\n    fwrite($fd, $data);\n    rewind($fd);\n    $res = stream_filter_append($fd, 'convert.quoted-printable-encode', STREAM_FILTER_READ, array(\n        'line-break-chars' => \"\\n\",\n        'line-length' => 74\n    ));\n    $str = \"\";\n    while(($c = fread($fd, 1))!= \"\") $str .= $c;\n    var_dump($str);\n    stream_filter_remove($res);\n    rewind($fd);\n    stream_filter_append($fd, 'convert.quoted-printable-encode', STREAM_FILTER_READ, array(\n        'line-break-chars' => \"\\n\",\n        'line-length' => 6\n    ));\n    $str = \"\";\n    while(($c = fread($fd, 1))!= \"\") $str .= $c;\n    var_dump($str);\n    fclose($fd);\n}\ntest_64166(\"FIRST \\nSECOND\");\ntest_64166(\"FIRST  \\nSECOND\");\n?>")).toMatchSnapshot();
  });
});
