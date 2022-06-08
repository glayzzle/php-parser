// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/ArrayObject_clone_other_std_props.phpt
  it("Clone ArrayObject using other with STD_PROP_LIST", function () {
    expect(parser.parseCode("<?php\n$a = new ArrayObject([1, 2, 3], ArrayObject::STD_PROP_LIST);\n$b = new ArrayObject($a);\n$c = clone $b;\nvar_dump($c);\n?>")).toMatchSnapshot();
  });
});
