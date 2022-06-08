// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug37707.phpt
  it("Bug #37707 (clone without assigning leaks memory)", function () {
    expect(parser.parseCode("<?php\nclass testme {\n    function __clone() {\n        echo \"clonned\\n\";\n    }\n}\nclone new testme();\necho \"NO LEAK\\n\";\n?>")).toMatchSnapshot();
  });
});
