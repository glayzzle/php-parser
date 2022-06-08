// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/join_basic.phpt
  it("Test join() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing join() : basic functionality ***\\n\";\n// Initialize all required variables\n$glue = ',';\n$pieces = array(1, 2, 3, 4);\n// pieces as array with numeric values\nvar_dump( join($glue, $pieces) );\n// pieces as array with strings values\n$glue = \", \"; // multiple car as glue\n$pieces = array(\"Red\", \"Green\", \"Blue\", \"Black\", \"White\");\nvar_dump( join($glue, $pieces) );\n// pieces as associative array (numeric values)\n$pieces = array(\"Hour\" => 10, \"Minute\" => 20, \"Second\" => 40);\n$glue = ':';\nvar_dump( join($glue, $pieces) );\n// pieces as associative array (string/numeric values)\n$pieces = array(\"Day\" => 'Friday', \"Month\" => \"September\", \"Year\" => 2007);\n$glue = '/';\nvar_dump( join($glue, $pieces) );\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
