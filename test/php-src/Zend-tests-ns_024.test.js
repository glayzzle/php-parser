// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ns_024.phpt
  it("024: __NAMESPACE__ constant out of namespace", function () {
    expect(parser.parseCode("<?php\nvar_dump(__NAMESPACE__);\n?>")).toMatchSnapshot();
  });
});
