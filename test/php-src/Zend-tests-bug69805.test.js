// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug69805.phpt
  it("Bug #69805 (null ptr deref and seg fault in zend_resolve_class_name)", function () {
    expect(parser.parseCode("<?php\nclass p{public function c(){(0)::t;}}?>\n?>")).toMatchSnapshot();
  });
});
