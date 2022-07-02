// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_multisort_variation10.phpt
  it("Test array_multisort() function : usage variation - testing with anonymous array arguments", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing array_multisort() : Testing with anonymous arguments ***\\n\";\nvar_dump(array_multisort(array(1,3,2,4)));\n?>")).toMatchSnapshot();
  });
});
