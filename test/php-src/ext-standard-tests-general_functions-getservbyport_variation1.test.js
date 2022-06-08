// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/getservbyport_variation1.phpt
  it("Test function getservbyport() by calling it more than or less than its expected arguments", function () {
    expect(parser.parseCode("<?php\nvar_dump(getservbyport( -1, \"tcp\" ));\nvar_dump(getservbyport( 80, \"ppp\" ));\nvar_dump(getservbyport( 2, 2));\nvar_dump(getservbyport( \"80\", \"tcp\"));\n?>")).toMatchSnapshot();
  });
});
