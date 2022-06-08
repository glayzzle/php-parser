// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug81477.phpt
  it("Bug #81477 (LimitIterator + SplFileObject regression in 8.0.1)", function () {
    expect(parser.parseCode("<?php\n$filename = __DIR__ . '/bug81477.csv';\n$s = fopen($filename, 'w+');\nfwrite($s, \"foo,bar\\nbaz,bat\\nmore,data\\n\");\nfclose($s);\n$sfo = new SplFileObject($filename);\n$sfo->setFlags(SplFileObject::READ_AHEAD);\n$limitIter = new LimitIterator($sfo, 1, -1);\nforeach($limitIter as $row) {\n    var_dump($row);\n}\n?>")).toMatchSnapshot();
  });
});
