// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/arrayObject_clone_basic1.phpt
  it("SPL: Cloning an instance of ArrayObject which wraps an array.", function () {
    expect(parser.parseCode("<?php\n$a = array(1,2);\n$aa1 =  new ArrayObject($a);\n$a['p1'] = 'new element added to a before clone';\n$aa2 = clone $aa1;\n$a['p2'] = 'new element added to a after clone';\n$aa1['new.aa1'] = 'new element added to aa1';\n$aa2['new.aa2'] = 'new element added to aa2';\nvar_dump($a, $aa1, $aa2);\n?>")).toMatchSnapshot();
  });
});
