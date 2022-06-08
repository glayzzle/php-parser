// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug46108.phpt
  it("Bug #46108 (DateTime - Memory leak when unserializing)", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set('America/Sao_Paulo');\nvar_dump(unserialize(serialize(new Datetime)));\n?>")).toMatchSnapshot();
  });
});
