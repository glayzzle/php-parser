// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/image/bug70096.phpt
  it("Bug #70096 (Repeated iptcembed() adds superfluous FF bytes)", function () {
    expect(parser.parseCode("<?php\n$filename = __DIR__ . '/bug70096.jpg';\n$im = imagecreatetruecolor(10, 10);\nimagejpeg($im, $filename);\nimagedestroy($im);\n$data = \"\\x1C\\x02x\\x00\\x0ATest image\"\n    . \"\\x1C\\x02t\\x00\\x22Copyright 2008-2009, The PHP Group\";\n$content1 = iptcembed($data, $filename);\n$fp = fopen($filename, \"wb\");\nfwrite($fp, $content1);\nfclose($fp);\n$content2 = iptcembed($data, $filename);\n$fp = fopen($filename, \"wb\");\nfwrite($fp, $content2);\nfclose($fp);\nvar_dump($content1 === $content2);\n?>")).toMatchSnapshot();
  });
});
