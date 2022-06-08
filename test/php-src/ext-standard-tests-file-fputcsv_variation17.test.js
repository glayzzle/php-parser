// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/fputcsv_variation17.phpt
  it("fputcsv() with user provided eol", function () {
    expect(parser.parseCode("<?php\n$data = [\n    ['aaa', 'bbb', 'ccc', 'dddd'],\n    ['123', '456', '789'],\n    ['\"aaa\"', '\"bbb\"'],\n];\n$eol_chars = ['||', '|', '\\n', \"\\n\", \"\\0\"];\nforeach ($eol_chars as $eol_char) {\n    $stream = fopen('php://memory', 'w+');\n    foreach ($data as $record) {\n        fputcsv($stream, $record, ',', '\"', '\\\\', $eol_char);\n    }\n    rewind($stream);\n    echo stream_get_contents($stream), \"\\n\";\n    fclose($stream);\n}\n?>")).toMatchSnapshot();
  });
});
