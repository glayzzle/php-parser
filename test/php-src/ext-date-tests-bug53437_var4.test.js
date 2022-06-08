// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug53437_var4.phpt
  it("Bug #53437 (Check that var_dump out is the same using the whole object or it's single properties), variation 4", function () {
    expect(parser.parseCode("<?php\n$dt = new DateTime('2009-10-11');\n$df = $dt->diff(new DateTime('2009-10-13'));\nvar_dump($df,\n    $df->y,\n    $df->m,\n    $df->d,\n    $df->h,\n    $df->i,\n    $df->s,\n    $df->f,\n    $df->invert,\n    $df->days);\n?>")).toMatchSnapshot();
  });
});
