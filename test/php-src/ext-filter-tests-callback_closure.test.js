// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/filter/tests/callback_closure.phpt
  it("callback function is a closure", function () {
    expect(parser.parseCode("<?php\n$callback = function ($var) {\n    return $var;\n};\n$var = \"test\";\nvar_dump(filter_var($var, FILTER_CALLBACK, array('options'=> $callback)));\n?>")).toMatchSnapshot();
  });
});
