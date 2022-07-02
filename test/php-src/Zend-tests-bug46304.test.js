// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug46304.phpt
  it("Bug #46304 (defining namespaced constant using define())", function () {
    expect(parser.parseCode("<?php\ndefine('NS1\\ns2\\const1','value1');\ndefine('ns1\\ns2\\const2','value2');\ndefine('ns1\\NS2\\coNSt3','value3');\nprint NS1\\ns2\\const1 . \"\\n\";\nprint ns1\\ns2\\const1 . \"\\n\";\nprint ns1\\NS2\\const1 . \"\\n\";\nprint NS1\\ns2\\const2 . \"\\n\";\nprint ns1\\ns2\\const2 . \"\\n\";\nprint ns1\\NS2\\const2 . \"\\n\";\nprint NS1\\ns2\\coNSt3 . \"\\n\";\nprint ns1\\ns2\\coNSt3 . \"\\n\";\nprint ns1\\ns2\\coNSt3 . \"\\n\";\nprint NS1\\ns2\\coNSt1 . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
