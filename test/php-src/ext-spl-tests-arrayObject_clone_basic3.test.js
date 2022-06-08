// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/arrayObject_clone_basic3.phpt
  it("SPL: Cloning nested ArrayObjects.", function () {
    expect(parser.parseCode("<?php\nclass C {\n    public $p = 'C::p.orig';\n}\n$wrappedObject = new C;\n$innerArrayObject = new ArrayObject($wrappedObject);\n$outerArrayObject =  new ArrayObject($innerArrayObject);\n$wrappedObject->dynamic1 = 'new prop added to $wrappedObject before clone';\n$clonedOuterArrayObject = clone $outerArrayObject;\n$wrappedObject->dynamic2 = 'new prop added to $wrappedObject after clone';\n$innerArrayObject['new.iAO'] = 'new element added $innerArrayObject';\n$outerArrayObject['new.oAO'] = 'new element added to $outerArrayObject';\n$clonedOuterArrayObject['new.coAO'] = 'new element added to $clonedOuterArrayObject';\nvar_dump($wrappedObject, $innerArrayObject, $outerArrayObject, $clonedOuterArrayObject);\n?>")).toMatchSnapshot();
  });
});
