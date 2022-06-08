// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug69336.phpt
  it("Bug #69336 (Issues with \"last day of <monthname>\")", function () {
    expect(parser.parseCode("<?php\nvar_dump(date('d.m.Y',strtotime('last day of april')));\nvar_dump(date('d.m.Y',strtotime('last tuesday of march 2015')));\nvar_dump(date('d.m.Y',strtotime('last wednesday of march 2015')));\nvar_dump(date('d.m.Y',strtotime('last wednesday of april 2015')));\nvar_dump(date('d.m.Y',strtotime('last wednesday of march 2014')));\nvar_dump(date('d.m.Y',strtotime('last wednesday of april 2014')));\n?>")).toMatchSnapshot();
  });
});
