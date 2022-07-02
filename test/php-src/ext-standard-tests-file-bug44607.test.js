// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/bug44607.phpt
  it("Bug #44607 (stream_get_line unable to correctly identify the \"ending\" in the stream content)", function () {
    expect(parser.parseCode("<?php\n$eol = '<EOL>';\n$tempnam = __DIR__ . '/' . 'tmpbug44607.txt';\n$data = str_repeat('.', 14000);\n$data .= $eol;\n$data .= $data;\nfile_put_contents($tempnam, $data);\n$fd = fopen($tempnam, 'r');\nvar_dump(strlen(stream_get_line($fd, 15000, $eol)));\nvar_dump(strlen(stream_get_line($fd, 15000, $eol)));\nfseek($fd, 1, SEEK_SET);\nvar_dump(strlen(stream_get_line($fd, 15000, $eol)));\nvar_dump(strlen(stream_get_line($fd, 15000, $eol)));\nfclose($fd);\nunlink($tempnam);\n?>")).toMatchSnapshot();
  });
});
