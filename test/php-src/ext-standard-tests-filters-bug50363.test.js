// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/filters/bug50363.phpt
  it("Bug #50363 (Invalid parsing in convert.quoted-printable-decode filter)", function () {
    expect(parser.parseCode("<?php\n$foo = \"Sauvegarder=C3=A9ussi(e) n=C3=A3o N=C3=83O\\n\";\n$foo .= \"Sauvegarder=c3=a9ussi(e) n=c3=a3o N=c3=83O\\n\"; // Does not work!\n$b = fopen('php://temp', 'w+');\nstream_filter_append($b, 'convert.quoted-printable-decode', STREAM_FILTER_WRITE);\nfwrite($b, $foo);\nrewind($b);\nfpassthru($b);\n?>")).toMatchSnapshot();
  });
});
