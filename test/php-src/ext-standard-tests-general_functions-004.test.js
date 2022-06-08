// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/004.phpt
  it("fgetcsv() with tab delimited fields (BUG #8258)", function () {
    expect(parser.parseCode("<?php\nchdir(__DIR__);\n$fp=fopen(\"004.data\",\"r\");\nwhile($a=fgetcsv($fp,100,\"\\t\")) {\n    echo join(\",\",$a).\"\\n\";\n}\nfclose($fp);\n?>")).toMatchSnapshot();
  });
});
