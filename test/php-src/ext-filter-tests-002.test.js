// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/filter/tests/002.phpt
  it("GET test with 2 values and an empty one", function () {
    expect(parser.parseCode("<?php echo $_GET['a'];\necho $_GET['b'];\necho $_GET['c'];\n?>")).toMatchSnapshot();
  });
});
