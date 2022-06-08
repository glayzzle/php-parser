// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/spl_object_id.phpt
  it("SPL: spl_object_id()", function () {
    expect(parser.parseCode("<?php\nvar_dump(spl_object_id(new stdClass));\n$a = new stdClass();\nvar_dump(spl_object_id(new stdClass) === spl_object_id($a));\n?>")).toMatchSnapshot();
  });
});
