// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dba/tests/dba_split.phpt
  it("DBA Split Test", function () {
    expect(parser.parseCode("<?php\nvar_dump(dba_key_split(null));\nvar_dump(dba_key_split(false));\nvar_dump(dba_key_split(1));\nvar_dump(dba_key_split(\"\"));\nvar_dump(dba_key_split(\"name1\"));\nvar_dump(dba_key_split(\"[key1\"));\nvar_dump(dba_key_split(\"[key1]\"));\nvar_dump(dba_key_split(\"key1]\"));\nvar_dump(dba_key_split(\"[key1]name1\"));\nvar_dump(dba_key_split(\"[key1]name1[key2]name2\"));\nvar_dump(dba_key_split(\"[key1]name1\"));\n?>")).toMatchSnapshot();
  });
});
