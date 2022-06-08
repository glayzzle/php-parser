// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/json/tests/bug73991.phpt
  it("Allow JSON_OBJECT_AS_ARRAY to have an effect", function () {
    expect(parser.parseCode("<?php\n$json = '{\"foo\":\"bar\"}';\nvar_dump(json_decode($json, false));\nvar_dump(json_decode($json, true));\nvar_dump(json_decode($json, null, 512, 0));\nvar_dump(json_decode($json, null, 512, JSON_OBJECT_AS_ARRAY));\n?>")).toMatchSnapshot();
  });
});
