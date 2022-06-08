// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/current_variation5.phpt
  it("Test current() function : usage variations - reference & normal parameters", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing current() : usage variations ***\\n\";\necho \"\\n-- Function: reference parameter --\\n\";\nfunction current_variation5_ref(&$a)\n{\n    var_dump(current($a));\n    var_dump(next($a));\n}\n$a = array('yes', 'maybe', 'no');\nvar_dump(current($a));\nvar_dump(next($a));\ncurrent_variation5($a);\necho \"\\n-- Function: normal parameter --\\n\";\nfunction current_variation5($a)\n{\n    var_dump(current($a));\n    var_dump(next($a));\n}\n$a = array('yes', 'maybe', 'no');\nvar_dump(current($a));\nvar_dump(next($a));\ncurrent_variation5($a);\n?>")).toMatchSnapshot();
  });
});
