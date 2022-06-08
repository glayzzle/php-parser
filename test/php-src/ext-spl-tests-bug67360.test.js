// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug67360.phpt
  it("Bug #67360 (Missing element after ArrayObject::getIterator)", function () {
    expect(parser.parseCode("<?php\n$array = array('' => 1, 1 => 2, 3 => 4);\n$ArrayObject = new ArrayObject($array);\nvar_dump($ArrayObject);\n$Iterator = $ArrayObject->getIterator();\nvar_dump(count($Iterator) === count($array));\nvar_dump(iterator_to_array($Iterator));\n?>")).toMatchSnapshot();
  });
});
