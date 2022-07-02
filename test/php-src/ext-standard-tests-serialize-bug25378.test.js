// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/bug25378.phpt
  it("Bug #25378 (unserialize() crashes with invalid data)", function () {
    expect(parser.parseCode("<?php\nvar_dump(unserialize(\"s:-1:\\\"\\\";\"));\nvar_dump(unserialize(\"i:823\"));\nvar_dump(unserialize(\"O:8:\\\"stdClass :0:{}\"));\nvar_dump(unserialize(\"O:8:\\\"stdClass\\\"+0:{}\"));\nvar_dump(unserialize(\"O:1000:\\\"stdClass\\\":0:{}\"));\nvar_dump(unserialize(\"a:2:{i:0;s:2:\\\"12\\\":\"));\nvar_dump(unserialize(\"a:2:{i:0;s:2:\\\"12\\\";i:1;s:3000:\\\"123\"));\nvar_dump(unserialize(\"a:2:{i:0;s:2:\\\"12\\\"+i:1;s:3:\\\"123\\\";}\"));\nvar_dump(unserialize(\"a:2:{i:0;s:2:\\\"12\\\";i:1;s:3:\\\"123\\\";\"));\nvar_dump(unserialize(\"s:3000:\\\"123\\\";\"));\nvar_dump(unserialize(\"s:3000:\\\"123\"));\nvar_dump(unserialize(\"s:3:\\\"123;\"));\nvar_dump(unserialize(\"s:0:\\\"123\\\";\"));\n?>")).toMatchSnapshot();
  });
});
