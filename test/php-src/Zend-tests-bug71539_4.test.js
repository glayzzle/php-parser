// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug71539_4.phpt
  it("Bug #71539.4 (Memory error on $arr[$a] =& $arr[$b] if RHS rehashes)", function () {
    expect(parser.parseCode("<?php\n$array = [0=>[]];\n$array[0][0] =& $array[0][''];\n$array[0][0] = 42;\nvar_dump($array);\n?>")).toMatchSnapshot();
  });
});
