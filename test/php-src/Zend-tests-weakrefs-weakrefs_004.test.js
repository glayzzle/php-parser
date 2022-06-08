// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/weakrefs/weakrefs_004.phpt
  it("WeakReference no inheritance", function () {
    expect(parser.parseCode("<?php\nclass Test extends WeakReference {}\n?>")).toMatchSnapshot();
  });
});
