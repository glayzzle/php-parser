// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/unserialize_ref_to_overwritten_declared_prop.phpt
  it("Trying to create a reference to an overwritten declared property", function () {
    expect(parser.parseCode("<?php\n$str = <<<STR\nO:5:\"Error\":2:{S:8:\"previous\";N;S:8:\"previous\";R:2;}\nSTR;\nvar_dump(unserialize($str));\n?>")).toMatchSnapshot();
  });
});
