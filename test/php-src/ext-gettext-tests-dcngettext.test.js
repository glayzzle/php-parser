// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gettext/tests/dcngettext.phpt
  it("dcngettext() tests", function () {
    expect(parser.parseCode("<?php\nvar_dump(dcngettext(1,1,1,1,1));\nvar_dump(dcngettext(\"test\",\"test\",\"test\",1,1));\nvar_dump(dcngettext(\"test\",\"test\",\"test\",0,0));\nvar_dump(dcngettext(\"test\",\"test\",\"test\",-1,-1));\nvar_dump(dcngettext(\"\",\"\",\"\",1,1));\nvar_dump(dcngettext(\"\",\"\",\"\",0,0));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
