// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/filter/tests/016.phpt
  it("filter_var() and FILTER_VALIDATE_EMAIL", function () {
    expect(parser.parseCode("<?php\n$values = Array(\n'a@b.c',\n'abuse@example.com',\n'test!.!@#$%^&*@example.com',\n'test@@#$%^&*())).com',\n'test@.com',\n'test@com',\n'@',\n'[]()/@example.com',\n'QWERTYUIOPASDFGHJKLZXCVBNM@QWERTYUIOPASDFGHJKLZXCVBNM.NET',\n'e.x.a.m.p.l.e.@example.com',\n'firstname.lastname@employee.2something.com',\n'-@foo.com',\n'foo@-.com',\n'foo@bar.123',\n'foo@bar.-'\n);\nforeach ($values as $value) {\n    var_dump(filter_var($value, FILTER_VALIDATE_EMAIL));\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
