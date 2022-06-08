// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/crafted_gd2.phpt
  it("Test max colors for a gd image.", function () {
    expect(parser.parseCode("<?php\nimagecreatefromgd(__DIR__ . '/crafted.gd2');\n?>")).toMatchSnapshot();
  });
});
