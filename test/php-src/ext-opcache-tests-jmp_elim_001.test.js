// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jmp_elim_001.phpt
  it("Edge-cases in constant conditional jump elimination", function () {
    expect(parser.parseCode("<?php\n$webserver = \"Apache\";\n$cpuArc = \"x86_64\";\n$archName = (strstr($cpuArc, \"64\") || PHP_INT_SIZE === 8) ? \"64\" : \"32\";\n$info = array('arch' => $archName,\n              'webserver' =>$webserver);\nheader('Content-Type: application/json');\necho json_encode($info) . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
