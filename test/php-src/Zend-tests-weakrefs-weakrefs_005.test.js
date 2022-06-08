// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/weakrefs/weakrefs_005.phpt
  it("WeakReference no __construct", function () {
    expect(parser.parseCode("<?php\nnew WeakReference();\n?>")).toMatchSnapshot();
  });
});
