// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/flexible-heredoc-complex-test3.phpt
  it("Flexible heredoc syntax complex test 3: interpolated nested heredocs\nwith the same delimiter name with different levels of indentation", function () {
    expect(parser.parseCode("<?php\n${' a'} = ' b';\n${' b'} = 'c';\n${\"b\\n b\"} = 'b';\nvar_dump(<<<DOC1\n      a\n     ${<<<DOC2\n        b\n        ${<<<DOC3\n             a\n            DOC3}\n        DOC2\n     }\n    c\n    DOC1);\n?>")).toMatchSnapshot();
  });
});
