// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/bcmath/tests/bcscale_variation003.phpt
  it("bcscale() return value", function () {
    expect(parser.parseCode("<?php\nvar_dump((int) ini_get('bcmath.scale'));\nvar_dump(bcscale(1));\nvar_dump((int) ini_get('bcmath.scale'));\nvar_dump(bcscale(4));\nvar_dump((int) ini_get('bcmath.scale'));\nvar_dump(bcscale());\nvar_dump((int) ini_get('bcmath.scale'));\nvar_dump(bcscale());\n?>")).toMatchSnapshot();
  });
});
