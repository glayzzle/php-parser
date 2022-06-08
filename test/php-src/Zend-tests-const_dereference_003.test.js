// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/const_dereference_003.phpt
  it("Const array deference", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL);\nvar_dump([1, 2, 3, 4,][3]);\nvar_dump([1, 2, 3, 4]['foo']);\nvar_dump([array(1,2,3), [4, 5, 6]][1][2]);\nforeach (array([1, 2, 3])[0] as $var) {\n     echo $var;\n}\n?>")).toMatchSnapshot();
  });
});
