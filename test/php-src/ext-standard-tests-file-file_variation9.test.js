// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/file_variation9.phpt
  it("Test file function : variation - test various endings of a file", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing file() : variation ***\\n\";\n$testfile = __DIR__.\"/fileVar9.txt\";\n$contents = array(\n   \"File ends on a single character\\na\",\n   \"File ends on a new line\\n\",\n   \"File ends on multiple newlines\\n\\n\\n\\n\",\n   \"File has\\n\\nmultiple lines and newlines\\n\\n\",\n   \"File has\\r\\nmultiple crlfs\\n\\r\\n\"\n   );\n@unlink($testfile);\nforeach ($contents as $content) {\n    $h = fopen($testfile, \"w\");\n    fwrite($h, $content);\n    fclose($h);\n    var_dump(file($testfile));\n    unlink($testfile);\n}\necho \"\\n*** Done ***\\n\";\n?>")).toMatchSnapshot();
  });
});
