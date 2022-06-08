// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/zend_strtod.phpt
  it("zend_strtod() leaks on big doubles", function () {
    expect(parser.parseCode("<?php\nvar_dump(\"1139932690.21688500\" - \"1139932790.21688500\");\nvar_dump(\"1139932690000.21688500\" - \"331139932790.21688500\");\nvar_dump(\"339932690.21688500\" - \"4564645646456463461139932790.21688500\");\nvar_dump(\"123123139932690.21688500\" - \"11399327900000000.21688500\");\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
