// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/arrayObject_clone_basic2.phpt
  it("SPL: Cloning an instance of ArrayObject which wraps an object.", function () {
    expect(parser.parseCode("<?php\nclass C { }\n$c = new C;\n$ao1 =  new ArrayObject($c);\n$c->p1 = 'new prop added to c before clone';\n$ao2 = clone $ao1;\n$c->p2 = 'new prop added to c after clone';\n$ao1['new.ao1'] = 'new element added to ao1';\n$ao2['new.ao2'] = 'new element added to ao2';\nvar_dump($c, $ao1, $ao2);\n?>")).toMatchSnapshot();
  });
});
