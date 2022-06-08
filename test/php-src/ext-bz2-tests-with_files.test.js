// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/bz2/tests/with_files.phpt
  it("BZ2 with files", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL);\n$filename = \"with_files.bz2\";\n$str = \"This is a test string.\\n\";\n$bz = bzopen($filename, \"w\");\nbzwrite($bz, $str);\nbzclose($bz);\n$bz = bzopen($filename, \"r\");\nprint bzread($bz, 10);\nprint bzread($bz);\nbzclose($bz);\nunlink($filename);\n?>")).toMatchSnapshot();
  });
});
