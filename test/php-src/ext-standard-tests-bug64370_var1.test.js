// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/bug64370_var1.phpt
  it("Test bug #64370 microtime(true) less than $_SERVER['REQUEST_TIME_FLOAT']", function () {
    expect(parser.parseCode("<?php\necho \"\\$_SERVER['REQUEST_TIME']: {$_SERVER['REQUEST_TIME']}\\n\";\necho \"\\$_SERVER['REQUEST_TIME_FLOAT']: {$_SERVER['REQUEST_TIME_FLOAT']}\\n\";\necho \"time(): \" . time() . \"\\n\";\necho \"microtime(true): \" . microtime(true) . \"\\n\";\n$d = (microtime(true)-$_SERVER['REQUEST_TIME_FLOAT'])*1000;\necho \"created in $d ms\\n\";\necho ((bool)($d >= 0)) . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
