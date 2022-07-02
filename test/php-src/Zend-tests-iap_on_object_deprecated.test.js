// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/iap_on_object_deprecated.phpt
  it("Using IAP functions on objects is deprecated", function () {
    expect(parser.parseCode("<?php\n$obj = (object)['a' => 'b'];\nvar_dump(reset($obj));\nvar_dump(current($obj));\nvar_dump(key($obj));\nvar_dump(next($obj));\nvar_dump(end($obj));\nvar_dump(prev($obj));\n?>")).toMatchSnapshot();
  });
});
