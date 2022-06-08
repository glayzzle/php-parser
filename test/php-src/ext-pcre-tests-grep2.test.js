// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/grep2.phpt
  it("preg_grep() 2nd test", function () {
    expect(parser.parseCode("<?php\nvar_dump(preg_grep('/+/', array()));\n$array = array(5=>'a', 'x' => '1', 'xyz'=>'q6', 'h20');\nvar_dump(preg_grep('@^[a-z]+@', $array));\nvar_dump(preg_grep('@^[a-z]+@', $array, PREG_GREP_INVERT));\nini_set('pcre.recursion_limit', 1);\nvar_dump(preg_last_error() == PREG_NO_ERROR);\nvar_dump(preg_grep('@^[a-z]+@', $array));\nvar_dump(preg_last_error() == PREG_RECURSION_LIMIT_ERROR);\n?>")).toMatchSnapshot();
  });
});
