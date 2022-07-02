// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/lsb_006.phpt
  it("ZE2 Late Static Binding ensuring extending 'static' is not allowed", function () {
    expect(parser.parseCode("<?php\nclass Foo extends static {\n}\n?>\n==DONE==")).toMatchSnapshot();
  });
});
