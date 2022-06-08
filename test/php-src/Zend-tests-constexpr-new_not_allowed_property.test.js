// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/constexpr/new_not_allowed_property.phpt
  it("New not allowed in property", function () {
    expect(parser.parseCode("<?php\n// New in (non-static) properties is a particularly tricky case. The initializer needs to be\n// evaluated on each object construction. Currently, the places where this can happen is\n// during object creation, or as part of the constructor. Doing this during object creation\n// can issues for use-cases such as serialization or generally anything that is effectively\n// based on newInstanceWithoutConstructor(). Handling this via the constructor is more\n// promising, but requires injecting code in the constructor, which may require adding a\n// constructor which is not explicitly declared, which may also require a child class to\n// call a constructor that has not been explicitly declared, otherwise properties may be\n// left uninitialized. A third option is another mechanism between object creation and\n// constructor invocation. Overall, the best way to address this is not clear right now.\nclass Test {\n    public $prop = new stdClass;\n}\n?>")).toMatchSnapshot();
  });
});
