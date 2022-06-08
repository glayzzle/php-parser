// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug32394.phpt
  it("Bug #32394 (offsetUnset() segfaults in a foreach)", function () {
    expect(parser.parseCode("<?php\n$object = new ArrayIterator;\n$object->append(1);\nforeach($object as $key => $value)\n{\n    $object->offsetUnset($key);\n}\n?>\n===DONE===")).toMatchSnapshot();
  });
});
