// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/json/tests/001.phpt
  it("json_decode() tests", function () {
    expect(parser.parseCode("<?php\nvar_dump(json_decode(\"\"));\nvar_dump(json_decode(\"\", 1));\nvar_dump(json_decode(\"\", 0));\nvar_dump(json_decode(\".\", 1));\nvar_dump(json_decode(\".\", 0));\nvar_dump(json_decode(\"<?>\"));\nvar_dump(json_decode(\";\"));\nvar_dump(json_decode(\"руссиш\"));\nvar_dump(json_decode(\"blah\"));\nvar_dump(json_decode(NULL));\nvar_dump(json_decode('{ \"test\": { \"foo\": \"bar\" } }'));\nvar_dump(json_decode('{ \"test\": { \"foo\": \"\" } }'));\nvar_dump(json_decode('{ \"\": { \"foo\": \"\" } }'));\nvar_dump(json_decode('{ \"\": { \"\": \"\" } }'));\nvar_dump(json_decode('{ \"\": { \"\": \"\" }'));\nvar_dump(json_decode('{ \"\": \"\": \"\" } }'));\n?>")).toMatchSnapshot();
  });
});
