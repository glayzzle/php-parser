// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/get_cfg_var_array.phpt
  it("Using get_cfg_var() on an array ini value", function () {
    expect(parser.parseCode("<?php\nvar_dump(get_cfg_var('ary'));\nvar_dump(get_cfg_var('ary2'));\n?>")).toMatchSnapshot();
  });
});
