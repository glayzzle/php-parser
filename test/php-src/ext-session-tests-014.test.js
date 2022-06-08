// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/014.phpt
  it("a script should not be able to modify session.use_trans_sid", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL);\nsession_id(\"test014\");\nsession_start();\n?>\n<a href=\"/link\">\n<?php\nini_set(\"session.use_trans_sid\",\"1\");\n?>\n<a href=\"/link\">\n<?php\nini_set(\"session.use_trans_sid\",\"0\");\n?>\n<a href=\"/link\">\n<?php\nsession_destroy();\n?>")).toMatchSnapshot();
  });
});
