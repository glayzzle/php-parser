// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/gzseek_variation2.phpt
  it("Test function gzseek() by calling it with SEEK_SET when reading", function () {
    expect(parser.parseCode("<?php\n$f = __DIR__.\"/004.txt.gz\";\n$h = gzopen($f, 'r');\necho \"move to the 50th byte\\n\";\nvar_dump(gzseek( $h, 50, SEEK_SET ) );\necho \"tell=\".gztell($h).\"\\n\";\n//read the next 10\nvar_dump(gzread($h, 10));\necho \"\\nmove forward to the 100th byte\\n\";\nvar_dump(gzseek( $h, 100, SEEK_SET ) );\necho \"tell=\".gztell($h).\"\\n\";\n//read the next 10\nvar_dump(gzread($h, 10));\necho \"\\nmove backward to the 20th byte\\n\";\nvar_dump(gzseek( $h, 20, SEEK_SET ) );\necho \"tell=\".gztell($h).\"\\n\";\n//read the next 10\nvar_dump(gzread($h, 10));\ngzclose($h);\n?>")).toMatchSnapshot();
  });
});
