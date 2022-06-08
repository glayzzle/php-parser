// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/calendar/tests/jdtojewish_overflow.phpt
  it("jdtojewish(): test overflow", function () {
    expect(parser.parseCode("<?php\nfor ($i=324542840; $i<324542850; $i++) {\n    echo $i, ':', jdtojewish($i), PHP_EOL;\n}\necho 'DONE', PHP_EOL;\n?>")).toMatchSnapshot();
  });
});
