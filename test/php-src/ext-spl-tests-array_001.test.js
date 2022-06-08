// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/array_001.phpt
  it("SPL: ArrayObject", function () {
    expect(parser.parseCode("<?php\n$ar = array(0=>0, 1=>1);\n$ar = new ArrayObject($ar);\nvar_dump($ar);\n$ar[2] = 2;\nvar_dump($ar[2]);\nvar_dump($ar[\"3\"] = 3);\nvar_dump(array_merge((array)$ar, array(4=>4, 5=>5)));\nvar_dump($ar[\"a\"] = \"a\");\nvar_dump($ar);\nvar_dump($ar[0]);\nvar_dump($ar[6]);\nvar_dump($ar[\"b\"]);\nunset($ar[1]);\nunset($ar[\"3\"]);\nunset($ar[\"a\"]);\nunset($ar[7]);\nunset($ar[\"c\"]);\nvar_dump($ar);\n$ar[] = '3';\n$ar[] = 4;\nvar_dump($ar);\n?>")).toMatchSnapshot();
  });
});
