// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug51393.phpt
  it("Bug #51393 (DateTime::createFromFormat() fails if format string contains timezone)", function () {
    expect(parser.parseCode("<?php\n$dt = DateTime::createFromFormat('O', '+0800');\nvar_dump($dt->getOffset());\n$dt = DateTime::createFromFormat('P', '+08:00');\nvar_dump($dt->getOffset());\n$dt = DateTime::createFromFormat('O', '-0800');\nvar_dump($dt->getOffset());\n$dt = DateTime::createFromFormat('P', '-08:00');\nvar_dump($dt->getOffset());\n$dt = DateTime::createFromFormat('[O]', '[+0800]');\nvar_dump($dt->getOffset());\n$dt = DateTime::createFromFormat('[P]', '[+08:00]');\nvar_dump($dt->getOffset());\n$dt = DateTime::createFromFormat('[O]', '[-0800]');\nvar_dump($dt->getOffset());\n$dt = DateTime::createFromFormat('[P]', '[-08:00]');\nvar_dump($dt->getOffset());\n$dt = DateTime::createFromFormat('O', 'GMT+0800');\nvar_dump($dt->getOffset());\n$dt = DateTime::createFromFormat('P', 'GMT+08:00');\nvar_dump($dt->getOffset());\n$dt = DateTime::createFromFormat('O', 'GMT-0800');\nvar_dump($dt->getOffset());\n$dt = DateTime::createFromFormat('P', 'GMT-08:00');\nvar_dump($dt->getOffset());\n$dt = DateTime::createFromFormat('[O]', '[GMT+0800]');\nvar_dump($dt->getOffset());\n$dt = DateTime::createFromFormat('[P]', '[GMT+08:00]');\nvar_dump($dt->getOffset());\n$dt = DateTime::createFromFormat('[O]', '[GMT-0800]');\nvar_dump($dt->getOffset());\n$dt = DateTime::createFromFormat('[P]', '[GMT-08:00]');\nvar_dump($dt->getOffset());\n$dt = DateTime::createFromFormat('O', 'invalid');\nvar_dump($dt);\n?>")).toMatchSnapshot();
  });
});
