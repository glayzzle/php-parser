// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/simplexml/tests/bug75245.phpt
  it("Bug #75245 Don't set content of elements with only whitespaces", function () {
    expect(parser.parseCode("<?php\nvar_dump(simplexml_load_string('<test1><test2>    </test2><test3></test3></test1>'));\n?>")).toMatchSnapshot();
  });
});
