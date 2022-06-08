// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/gzseek_variation7.phpt
  it("Test function gzseek() by calling it with SEEK_END when writing", function () {
    expect(parser.parseCode("<?php\n$f = \"gzseek_variation7.gz\";\n$h = gzopen($f, 'w');\n$str1 = \"This is the first line.\";\n$str2 = \"This is the second line.\";\ngzwrite($h, $str1);\necho \"tell=\";\nvar_dump(gztell($h));\n//seek to the end which is not sensible of course.\necho \"move to the end of the file\\n\";\nvar_dump(gzseek($h, 0, SEEK_END));\necho \"tell=\";\nvar_dump(gztell($h));\ngzwrite($h, $str2);\necho \"tell=\";\nvar_dump(gztell($h));\ngzclose($h);\necho \"\\nreading the output file\\n\";\n$h = gzopen($f, 'r');\ngzpassthru($h);\ngzclose($h);\necho \"\\n\";\nunlink($f);\n?>")).toMatchSnapshot();
  });
});
