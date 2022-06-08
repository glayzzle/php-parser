// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/arrayObject_getFlags_basic2.phpt
  it("SPL: ArrayObject::getFlags() - ensure flags are passed on to nested array objects and iterators.", function () {
    expect(parser.parseCode("<?php\n$ao = new ArrayObject(array(), ArrayObject::STD_PROP_LIST|ArrayObject::ARRAY_AS_PROPS);\nvar_dump($ao->getFlags());\n$ao2 = new ArrayObject($ao);\nvar_dump($ao2->getFlags());\nvar_dump($ao2->getIterator()->getFlags());\n$ai = new ArrayIterator($ao);\nvar_dump($ai->getFlags());\n$ao2 = new ArrayObject($ao, 0);\nvar_dump($ao2->getFlags());\n?>")).toMatchSnapshot();
  });
});
