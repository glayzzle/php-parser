// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/gzfilegzreadfile.phpt
  it("gzfile(), gzreadfile()", function () {
    expect(parser.parseCode("<?php\n$original = <<<EOD\nblah blah blah blah blah blah blah\nblah blah blah blah blah blah blah\nblah blah blah blah blah blah blah\nblah blah blah blah blah blah blah\nblah blah blah blah blah blah blah\nblah blah blah blah blah blah blah\nblah blah blah blah blah blah blah\nblah blah blah blah blah blah blah\nblah blah blah blah blah blah blah\nblah blah blah blah blah blah blah\nblah blah blah blah blah blah blah\nblah blah blah blah blah blah blah\nblah blah blah blah blah blah blah\nblah blah blah blah blah blah blah\nblah blah blah blah blah blah blah\nblah blah blah blah blah blah blah\nEOD;\n$filename = tempnam(sys_get_temp_dir(), \"phpt\");\n$fp = gzopen($filename, \"wb\");\ngzwrite($fp, $original);\nvar_dump(strlen($original));\nfclose($fp);\nreadgzfile($filename);\necho \"\\n\";\n$lines = gzfile($filename);\nunlink($filename);\nforeach ($lines as $line) {\n    echo $line;\n}\n?>")).toMatchSnapshot();
  });
});
