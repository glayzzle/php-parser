// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/spl_classes.phpt
  it("SPL: spl_classes() function", function () {
    expect(parser.parseCode("<?php\nvar_dump(is_array(spl_classes()));\n?>")).toMatchSnapshot();
  });
});
