// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/arrayObject___construct_basic1.phpt
  it("SPL: ArrayObject::__construct basic usage.", function () {
    expect(parser.parseCode("<?php\necho \"--> No arguments:\\n\";\nvar_dump(new ArrayObject());\necho \"--> Object argument:\\n\";\n$a = new stdClass;\n$a->p = 'hello';\nvar_dump(new ArrayObject($a));\necho \"--> Array argument:\\n\";\nvar_dump(new ArrayObject(array('key1' => 'val1')));\necho \"--> Nested ArrayObject argument:\\n\";\nvar_dump(new ArrayObject(new ArrayObject($a)));\n?>")).toMatchSnapshot();
  });
});
