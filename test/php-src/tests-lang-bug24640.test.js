// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/bug24640.phpt
  it("Bug #24640 (var_export and var_dump can't output large float)", function () {
    expect(parser.parseCode("<?php\nfunction test($v)\n{\n    echo var_export($v, true) . \"\\n\";\n    var_dump($v);\n    echo \"$v\\n\";\n    print_r($v);\n    echo \"\\n------\\n\";\n}\ntest(1.7e+300);\ntest(1.7e-300);\ntest(1.7e+79);\ntest(1.7e-79);\ntest(1.7e+80);\ntest(1.7e-80);\ntest(1.7e+81);\ntest(1.7e-81);\ntest(1.7e+319);\ntest(1.7e-319);\ntest(1.7e+320);\ntest(1.7e-320);\ntest(1.7e+321);\ntest(1.7e-321);\ntest(1.7e+324);\ntest(1.7e-324);\ntest(1.7e+1000);\ntest(1.7e-1000);\n?>")).toMatchSnapshot();
  });
});
