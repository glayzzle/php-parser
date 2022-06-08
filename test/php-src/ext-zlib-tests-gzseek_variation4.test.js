// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/gzseek_variation4.phpt
  it("Test function gzseek() by calling it with SEEK_SET when writing", function () {
    expect(parser.parseCode("<?php\n$f = \"gzseek_variation4.gz\";\n$h = gzopen($f, 'w');\n$str1 = \"This is the first line.\";\n$str2 = \"This is the second line.\";\ngzwrite($h, $str1);\necho \"tell=\".gztell($h).\"\\n\";\n//seek forwards 20 bytes.\ngzseek($h, strlen($str1) + 20, SEEK_SET);\necho \"tell=\".gztell($h).\"\\n\";\ngzwrite($h, $str2);\necho \"tell=\".gztell($h).\"\\n\";\ngzclose($h);\necho \"\\nreading the output file\\n\";\n$h = gzopen($f, 'r');\necho gzread($h, strlen($str1)).\"\\n\";\nvar_dump(bin2hex(gzread($h, 20)));\necho gzread($h, strlen($str2)).\"\\n\";\ngzclose($h);\nunlink($f);\n?>")).toMatchSnapshot();
  });
});
