// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/filter/tests/042.phpt
  it("Combination of strip & sanitize filters", function () {
    expect(parser.parseCode("<?php\n$var = 'XYZ< script>alert(/ext/filter+bypass/);< /script>ABC';\n$a = filter_var($var, FILTER_SANITIZE_STRING, array(\"flags\" => FILTER_FLAG_STRIP_LOW));\necho $a . \"\\n\";\n$var = 'XYZ<\nscript>alert(/ext/filter+bypass/);<\n/script>ABC';\n$a = filter_var($var, FILTER_SANITIZE_STRING, array(\"flags\" => FILTER_FLAG_STRIP_LOW));\necho $a . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
