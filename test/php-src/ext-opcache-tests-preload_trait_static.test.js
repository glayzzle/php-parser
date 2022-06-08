// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/preload_trait_static.phpt
  it("Preload trait with static variables in method", function () {
    expect(parser.parseCode("<?php\n$bar = new Bar;\n$bar->test();\n?>")).toMatchSnapshot();
  });
});
