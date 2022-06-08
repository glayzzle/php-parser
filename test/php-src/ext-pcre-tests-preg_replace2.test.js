// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/preg_replace2.phpt
  it("preg_replace()", function () {
    expect(parser.parseCode("<?php\nvar_dump(preg_replace(array('/\\da(.)/ui', '@..@'), '$1', '12Abc'));\nvar_dump(preg_replace(array('/\\da(.)/ui', '@(.)@'), '$1', array('x','a2aA', '1av2Ab')));\nvar_dump(preg_replace(array('/[\\w]+/'), array('$'), array('xyz', 'bdbd')));\nvar_dump(preg_replace(array('/\\s+/', '~[b-d]~'), array('$'), array('x y', 'bd bc')));\n?>")).toMatchSnapshot();
  });
});
