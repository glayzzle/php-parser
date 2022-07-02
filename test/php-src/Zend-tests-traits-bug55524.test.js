// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/bug55524.phpt
  it("Bug #55524 Traits should not be able to extend a class", function () {
    expect(() => parser.parseCode("<?php\nclass Base {}\ntrait Foo extends Base {\n    function bar() {}\n}\necho 'DONE';\n?>")).toThrowErrorMatchingSnapshot();
  });
});
