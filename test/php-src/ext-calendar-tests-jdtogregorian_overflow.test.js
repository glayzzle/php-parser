// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/calendar/tests/jdtogregorian_overflow.phpt
  it("jdtogregorian(): test overflow", function () {
    expect(parser.parseCode("<?php\nfor ($i=536838860; $i<536838870; $i++) {\n    echo $i, ':', jdtogregorian($i), PHP_EOL;\n}\necho 'DONE', PHP_EOL;\n?>")).toMatchSnapshot();
  });
});
