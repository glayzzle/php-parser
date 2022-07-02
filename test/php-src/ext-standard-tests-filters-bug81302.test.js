// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/filters/bug81302.phpt
  it("Bug #81302 (Stream position after stream filter removed)", function () {
    expect(parser.parseCode("<?php\n$f = fopen(\"php://memory\", \"w+b\");\n$z = stream_filter_append($f, \"zlib.deflate\", STREAM_FILTER_WRITE, 6);\nfwrite($f, \"Testing\");\nstream_filter_remove($z);\n$pos = ftell($f);\nfseek($f, 0);\n$count = strlen(fread($f, 1024));\nfclose($f);\nvar_dump($count === $pos);\n?>")).toMatchSnapshot();
  });
});
