// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/streams/bug65483.phpt
  it("Bug #65483: quoted-printable encode stream filter incorrectly encoding spaces", function () {
    expect(parser.parseCode("<?php\n$data = 'a b=c d';\n$fd = fopen('php://temp', 'w+');\nfwrite($fd, $data);\nrewind($fd);\n$res = stream_filter_append($fd, 'convert.quoted-printable-encode', STREAM_FILTER_READ);\nvar_dump(stream_get_contents($fd, -1, 0));\nfclose($fd);\n?>")).toMatchSnapshot();
  });
});
