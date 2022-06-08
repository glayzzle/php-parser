// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/bug30862.phpt
  it("Bug #30862 (Static array with boolean indexes)", function () {
    expect(parser.parseCode("<?php\nclass T {\n    static $a = array(false=>\"false\", true=>\"true\");\n}\nprint_r(T::$a);\n?>\n----------\n<?php\ndefine(\"X\",0);\ndefine(\"Y\",1);\nclass T2 {\n    static $a = array(X=>\"false\", Y=>\"true\");\n}\nprint_r(T2::$a);\n?>")).toMatchSnapshot();
  });
});
