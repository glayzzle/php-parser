// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/fputcsv_variation16.phpt
  it("fputcsv() with empty $escape", function () {
    expect(parser.parseCode("<?php\n$data = array(\n    ['\\\\'],\n    ['\\\\\"']\n);\n$stream = fopen('php://memory', 'w+');\nforeach ($data as $record) {\n    fputcsv($stream, $record, ',', '\"', '');\n}\nrewind($stream);\necho stream_get_contents($stream);\nfclose($stream);\n?>")).toMatchSnapshot();
  });
});
