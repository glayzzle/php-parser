// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/filter/tests/036.phpt
  it("filter_var_array() and references", function () {
    expect(parser.parseCode("<?php\n$var = \"1\";\n$data = array();\n$data[\"test1\"] = 1;\n$data[\"test2\"] = &$var;\n$args = array();\n$args[\"test1\"] = FILTER_VALIDATE_INT;\n$args[\"test2\"] = FILTER_VALIDATE_INT;\n$ret = filter_var_array($data, $args);\nvar_dump($ret);\nvar_dump($data); //should be separated, i.e. not reference anymore. looks like we can't change this, or it'd change the original zval instead..\nvar_dump($var); //should be still string(1) \"1\"\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
