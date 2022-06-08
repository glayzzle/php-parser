// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zip/tests/bug49072.phpt
  it("Bug #49072 (feof never returns true for damaged file in zip)", function () {
    expect(parser.parseCode("<?php\n$f = __DIR__  . '/bug49072.zip';\n$o = new ZipArchive();\nif (! $o->open($f, ZipArchive::CHECKCONS)) {\n    exit ('error can\\'t open');\n}\n$r = $o->getStream('file1'); // this file has a wrong crc\nif (!$r)die('failed to open a stream for file1');\n$s = '';\nwhile (! feof($r)) {\n    $s .= fread($r,1024);\n}\n?>")).toMatchSnapshot();
  });
});
