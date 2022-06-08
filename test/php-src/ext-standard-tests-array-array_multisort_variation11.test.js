// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_multisort_variation11.phpt
  it("Test array_multisort() function : usage variation - testing with empty array", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing array_multisort() : Testing with empty array ***\\n\";\nvar_dump(array_multisort(array()));\n?>")).toMatchSnapshot();
  });
});
