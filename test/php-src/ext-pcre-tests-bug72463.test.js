// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/bug72463.phpt
  it("Bug #72463 mail fails with invalid argument", function () {
    expect(parser.parseCode("<?php\nmail(\"some.address.it.wont.ever.reach@lookup.and.try.to.find.this.host.name\",\"subject\",\"a\", \"\");\nmail(\"some.address.it.wont.ever.reach@lookup.and.try.to.find.this.host.name\",\"subject\",\"a\", NULL);\n?>\n===DONE===")).toMatchSnapshot();
  });
});
