// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/bz2/tests/005.phpt
  it("bzcompress()/bzdecompress() tests", function () {
    expect(parser.parseCode("<?php\n$string = \"Life it seems, will fade away\nDrifting further everyday\nGetting lost within myself\nNothing matters no one else\";\nvar_dump(bzcompress(1,1,1));\nvar_dump(bzcompress($string, 100));\nvar_dump(bzcompress($string, 100, -1));\nvar_dump(bzcompress($string, 100, 1000));\nvar_dump(bzcompress($string, -1, 1));\n$data = bzcompress($string);\n$data2 = bzcompress($string, 1, 10);\n$data3 = $data2;\n$data3[3] = 0;\nvar_dump(bzdecompress(1,1));\nvar_dump(bzdecompress($data3));\nvar_dump(bzdecompress($data3,1));\nvar_dump(bzdecompress($data, 0));\nvar_dump(bzdecompress($data, 1));\nvar_dump(bzdecompress($data));\nvar_dump(bzdecompress($data2));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
