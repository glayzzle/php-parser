// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/filter/tests/callback_non_modified_var.phpt
  it("callback function returns non modified value", function () {
    expect(parser.parseCode("<?php\nfunction callback($var) {\n    return $var;\n}\n$var = \"test\";\nvar_dump(filter_var($var, FILTER_CALLBACK, array('options'=>'callback')));\n?>")).toMatchSnapshot();
  });
});
