// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug47168.phpt
  it("Bug #47168 (printf of floating point variable prints maximum of 40 decimal places)", function () {
    expect(parser.parseCode("<?php\n$dyadic = 0.00000000000045474735088646411895751953125;\nvar_dump(printf (\"%1.41f\\n\",unserialize(serialize($dyadic))));\n?>")).toMatchSnapshot();
  });
});
