// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/002.phpt
  it("File/Stream functions", function () {
    expect(parser.parseCode("<?php\n$data = <<<EOD\nblah blah blah blah blah blah blah\nblah blah blah blah blah blah blah\nblah blah blah blah blah blah blah\nblah blah blah blah blah blah blah\nblah blah blah blah blah blah blah\nblah blah blah blah blah blah blah\nblah blah blah blah blah blah blah\nblah blah blah blah blah blah blah\nblah blah blah blah blah blah blah\nblah blah blah blah blah blah blah\nblah blah blah blah blah blah blah\nblah blah blah blah blah blah blah\nblah blah blah blah blah blah blah\nblah blah blah blah blah blah blah\nblah blah blah blah blah blah blah\nblah blah blah blah blah blah blah\nEOD;\n$name = tempnam(\"./ext/standard/tests/file/\", \"php\");\n$fp = fopen($name, \"w\");\nfwrite($fp, $data);\nfclose($fp);\n//readfile($name);\necho file_get_contents($name);\nunlink($name);\n?>")).toMatchSnapshot();
  });
});
