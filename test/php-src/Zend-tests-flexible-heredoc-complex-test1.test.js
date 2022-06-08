// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/flexible-heredoc-complex-test1.phpt
  it("Flexible heredoc syntax complex test 1: interpolated nested heredocs\nwith different delimiter names", function () {
    expect(parser.parseCode("<?php\n$a = 'b';\n${\"b\\nb\\n d\"} = 'b';\nvar_dump(<<<DOC1\n    a\n    ${<<<DOC2\n        b\n        ${<<<DOC3\n            a\n            DOC3}\n         d\n        DOC2\n    }\n    c\n    DOC1);\n?>")).toMatchSnapshot();
  });
});
