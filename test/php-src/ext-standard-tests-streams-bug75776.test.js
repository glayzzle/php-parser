// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/streams/bug75776.phpt
  it("Bug #75776 (Flushing streams with compression filter is broken)", function () {
    expect(parser.parseCode("<?php\n$compression = [\n    'gz' => ['zlib.deflate', 'gzinflate'],\n    'bz2' => ['bzip2.compress', 'bzdecompress']\n];\nforeach ($compression as $ext => [$filter, $function]) {\n    $stream = fopen(__DIR__ . \"/75776.$ext\", 'w');\n    stream_filter_append($stream, $filter);\n    fwrite($stream,\"sdfgdfg\");\n    fflush($stream);\n    fclose($stream);\n    $compressed = file_get_contents(__DIR__ . \"/75776.$ext\");\n    var_dump($function($compressed));\n}\n?>")).toMatchSnapshot();
  });
});
