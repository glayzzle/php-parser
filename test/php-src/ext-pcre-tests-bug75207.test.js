// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/bug75207.phpt
  it("CVE-2016-1283, see bug #75207", function () {
    expect(parser.parseCode("<?php\npreg_match(\"/(?:F?+(?:^(?(R)a+\\\"){99}-))(?J)(?'R'(?'R'<((?'RR'(?'R'\\){97)?J)?J)(?'R'(?'R'\\){99|(:(?|(?'R')(\\k'R')|((?'R')))H'R'R)(H'R))))))/\", \"*b\\dc\");\n?>")).toMatchSnapshot();
  });
});
