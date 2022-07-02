// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/basic/001.phpt
  it("Trivial \"Hello World\" test", function () {
    expect(parser.parseCode("<?php echo \"Hello World\"?>")).toMatchSnapshot();
  });
});
