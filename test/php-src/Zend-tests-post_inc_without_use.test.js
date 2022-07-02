// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/post_inc_without_use.phpt
  it("POST_INC without use during DFA optimization", function () {
    expect(parser.parseCode("<?php\nfunction test($n) {\n    for ($i = 0; $i < $n; !$i++) {}\n}\n?>\n===DONE===")).toMatchSnapshot();
  });
});
