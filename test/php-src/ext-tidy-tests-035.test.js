// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/tidy/tests/035.phpt
  it("tidyNode::__construct()", function () {
    expect(parser.parseCode("<?php\nnew tidyNode;\n?>")).toMatchSnapshot();
  });
});
