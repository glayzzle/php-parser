// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/realpath_variation2.phpt
  it("Test realpath() function : variation", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing realpath() : variation ***\\n\";\n$paths = array('c:\\\\',\n               'c:',\n               'c' ,\n               '\\\\' ,\n               '/',\n               'c:temp',\n               'c:\\\\/',\n               '/tmp/',\n               '/tmp/\\\\',\n               '\\\\tmp',\n               '\\\\tmp\\\\');\nforeach($paths as $path) {\n      echo \"\\n--$path--\\n\";\n      var_dump( realpath($path) );\n};\n?>")).toMatchSnapshot();
  });
});
