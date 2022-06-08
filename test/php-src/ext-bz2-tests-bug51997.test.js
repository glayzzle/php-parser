// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/bz2/tests/bug51997.phpt
  it("Bug #51997 (SEEK_CUR with 0 value, returns a warning)", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL);\n$filename = \"bug51997.bz2\";\n$str = \"This is a test string.\\n\";\n$bz = bzopen($filename, \"w\");\nbzwrite($bz, $str);\nbzclose($bz);\n$bz = bzopen($filename, \"r\");\nfseek($bz, 0, SEEK_CUR);\nprint bzread($bz, 10);\nprint bzread($bz);\nbzclose($bz);\nunlink($filename);\n?>")).toMatchSnapshot();
  });
});
