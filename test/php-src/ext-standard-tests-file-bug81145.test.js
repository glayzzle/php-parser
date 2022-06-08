// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/bug81145.phpt
  it("Bug #81145 (copy() and stream_copy_to_stream() fail for +4GB files)", function () {
    expect(parser.parseCode("<?php\n$src = __DIR__ . \"/bug81145_src.bin\";\n$dst = __DIR__ . \"/bug81145_dst.bin\";\ndefine('SIZE_4G', 0x100000000);\n//Create file and append random content at the 4GB boundary\nif (PHP_OS_FAMILY !== \"Windows\") {\n    exec(\"fallocate -l \" . (SIZE_4G-0x100) . \" \" . escapeshellarg($src));\n} else {\n    exec(\"fsutil file createnew \" . escapeshellarg($src) . \" \" . (SIZE_4G-0x100));\n}\n$fp = fopen($src, \"ab\");\nfwrite($fp, random_bytes(0x200));\nfclose($fp);\ncopy($src, $dst);\nif (filesize($src) !== filesize($dst)) {\n    die(\"Files have different sizes!\");\n}\n$f1 = fopen($src,'rb') or die(\"src open failed\");\n$f2 = fopen($dst,'rb') or die(\"dst open failed\");\n//Seek to 4 GB boundary, as this is the location where the problem occurs\nfseek($f1, SIZE_4G - 0x100, SEEK_SET);\nfseek($f2, SIZE_4G - 0x100, SEEK_SET);\necho (fread($f1,0x200) === fread($f2,0x200) ? \"Identical\" : \"Copy failed\");\nfclose($f1);\nfclose($f2);\n?>")).toMatchSnapshot();
  });
});
