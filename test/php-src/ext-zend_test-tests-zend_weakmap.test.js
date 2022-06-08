// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zend_test/tests/zend_weakmap.phpt
  it("Test internal weakmap API", function () {
    expect(parser.parseCode("<?php\n$id1 = new \\stdClass;\n$id2 = new \\stdClass;\nvar_dump(zend_weakmap_attach($id1, 1));\nvar_dump(zend_weakmap_attach($id1, 3));\nvar_dump(zend_weakmap_attach($id2, 2));\nvar_dump(zend_weakmap_dump());\nunset($id1);\nvar_dump(zend_weakmap_dump());\nvar_dump(zend_weakmap_remove($id2));\nvar_dump(zend_weakmap_remove($id2));\nvar_dump(zend_weakmap_dump());\nvar_dump(zend_weakmap_attach($id2, $id2));\nvar_dump(zend_weakmap_dump());\n?>")).toMatchSnapshot();
  });
});
