// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/bug77371.phpt
  it("Bug #77371 (heap buffer overflow in mb regex functions - compile_string_node)", function () {
    expect(parser.parseCode("<?php\nvar_dump(mb_ereg(\"()0\\xfc00000\\xfc00000\\xfc00000\\xfc\",\"\"));\n?>")).toMatchSnapshot();
  });
});
