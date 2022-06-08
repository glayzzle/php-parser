// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug69889.phpt
  it("Bug #69889: Null coalesce operator doesn't work for string offsets", function () {
    expect(parser.parseCode("<?php\n$foo = \"test\";\nvar_dump($foo[0] ?? \"default\");\nvar_dump($foo[5] ?? \"default\");\nvar_dump(isset($foo[5]) ? $foo[5] : \"default\");\nvar_dump($foo[\"str\"] ?? \"default\");\nvar_dump(isset($foo[\"str\"]) ? $foo[\"str\"] : \"default\");\n?>")).toMatchSnapshot();
  });
});
