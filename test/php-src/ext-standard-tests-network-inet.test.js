// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/network/inet.phpt
  it("inet_ntop() & inet_pton() tests", function () {
    expect(parser.parseCode("<?php\n$packed = chr(127) . chr(0) . chr(0) . chr(1);\nvar_dump(inet_ntop($packed));\n$packed = chr(255) . chr(255) . chr(255) . chr(0);\nvar_dump(inet_ntop($packed));\nvar_dump(inet_ntop(-1));\nvar_dump(inet_ntop(\"\"));\nvar_dump(inet_ntop(\"blah-blah\"));\nvar_dump(inet_pton(\"\"));\nvar_dump(inet_pton(-1));\nvar_dump(inet_pton(\"abra\"));\n$array = array(\n    \"127.0.0.1\",\n    \"66.163.161.116\",\n    \"255.255.255.255\",\n    \"0.0.0.0\",\n    );\nforeach ($array as $val) {\n    var_dump(bin2hex($packed = inet_pton($val)));\n    var_dump(inet_ntop($packed));\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
