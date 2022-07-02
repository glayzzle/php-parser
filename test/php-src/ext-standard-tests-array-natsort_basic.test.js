// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/natsort_basic.phpt
  it("Test natsort(): basic functionality", function () {
    expect(parser.parseCode("<?php\n/*\n* Function is implemented in ext/standard/array.c\n*/\n$array1 = $array2 = array(\"img12.png\", \"img10.png\", \"img2.png\", \"img1.png\");\nsort($array1);\necho \"Standard sorting\\n\";\nprint_r($array1);\nnatsort($array2);\necho \"\\nNatural order sorting\\n\";\nprint_r($array2);\n?>")).toMatchSnapshot();
  });
});
