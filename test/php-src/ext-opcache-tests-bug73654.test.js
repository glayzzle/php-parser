// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/bug73654.phpt
  it("Bug #73654: Segmentation fault in zend_call_function", function () {
    expect(parser.parseCode("<?php\necho xyz();\nfunction x () : string {\n    return 'x';\n}\nfunction xyz() : string {\n    return x().'yz';\n}\n?>")).toMatchSnapshot();
  });
});
