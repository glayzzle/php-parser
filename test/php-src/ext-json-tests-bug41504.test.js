// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/json/tests/bug41504.phpt
  it("Bug #41504 (json_decode() converts empty array keys to \"_empty_\")", function () {
    expect(parser.parseCode("<?php\nvar_dump(json_decode('{\"\":\"value\"}', true));\nvar_dump(json_decode('{\"\":\"value\", \"key\":\"value\"}', true));\nvar_dump(json_decode('{\"key\":\"value\", \"\":\"value\"}', true));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
