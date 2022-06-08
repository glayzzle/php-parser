// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/arrayObject_getFlags_basic1.phpt
  it("SPL: ArrayObject::getFlags() basic usage", function () {
    expect(parser.parseCode("<?php\n$ao = new ArrayObject(new ArrayObject(new stdClass));\nvar_dump($ao->getFlags());\n$ao = new ArrayObject(new ArrayObject(array(1,2,3)), ArrayObject::STD_PROP_LIST);\nvar_dump($ao->getFlags());\n$ao = new ArrayObject(new ArrayIterator(new ArrayObject()), ArrayObject::ARRAY_AS_PROPS);\nvar_dump($ao->getFlags());\n$ao = new ArrayObject(new ArrayObject(), ArrayObject::STD_PROP_LIST|ArrayObject::ARRAY_AS_PROPS);\nvar_dump($ao->getFlags());\n$cao = clone $ao;\nvar_dump($cao->getFlags());\n?>")).toMatchSnapshot();
  });
});
