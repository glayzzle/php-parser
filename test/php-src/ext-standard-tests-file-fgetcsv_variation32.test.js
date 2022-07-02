// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/fgetcsv_variation32.phpt
  it("fgetcsv() with empty $escape", function () {
    expect(parser.parseCode("<?php\n$contents = <<<EOS\n\"cell1\",\"cell2\\\\\",\"cell3\",\"cell4\"\n\"\\\\\\\\\\\\line1\nline2\\\\\\\\\\\\\"\nEOS;\n$stream = fopen('php://memory', 'w+');\nfwrite($stream, $contents);\nrewind($stream);\nwhile (($data = fgetcsv($stream, 0, ',', '\"', '')) !== false) {\n    print_r($data);\n}\nfclose($stream);\n?>")).toMatchSnapshot();
  });
});
