// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/gzseek_variation3.phpt
  it("Test function gzseek() by calling it with SEEK_CUR when reading", function () {
    expect(parser.parseCode("<?php\n$f = __DIR__.\"/004.txt.gz\";\n$h = gzopen($f, 'r');\necho \"move to the 50th byte\\n\";\nvar_dump(gzseek( $h, 50, SEEK_CUR ) );\necho \"tell=\".gztell($h).\"\\n\";\n//read the next 10\nvar_dump(gzread($h, 10));\necho \"\\nmove forward to the 94th byte\\n\";\nvar_dump(gzseek( $h, 34, SEEK_CUR ) );\necho \"tell=\".gztell($h).\"\\n\";\n//read the next 10\nvar_dump(gzread($h, 10));\necho \"\\nmove backward to the 77th byte\\n\";\nvar_dump(gzseek( $h, -27, SEEK_CUR ) );\necho \"tell=\".gztell($h).\"\\n\";\n//read the next 10\nvar_dump(gzread($h, 10));\ngzclose($h);\n?>")).toMatchSnapshot();
  });
});
