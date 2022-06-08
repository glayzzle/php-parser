// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/strtotime_basic.phpt
  it("strtotime() function - a test to show the difference in behaviour between 'first' and '1', \"second\" and \"2\"...", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set('UTC');\n/*\n * The first of December 2008 is a Monday.\n * The term \"Monday December 2008\" will be parsed as the first Monday in December 2008.\n */\n/*\n * This is parsed as the \"first following Monday OR the current day if it is a Monday\"\n */\nvar_dump(date('Y-m-d', strtotime('1 Monday December 2008')));\n/*\n * This is parsed as the \"second following Monday OR the first following\n * Monday if the current day is a Monday\"\n */\nvar_dump(date('Y-m-d', strtotime('2 Monday December 2008')));\n/*\n * This is parsed as the \"third following Monday OR the second following\n * Monday if the current day is a Monday\"\n */\nvar_dump(date('Y-m-d', strtotime('3 Monday December 2008')));\n/*\n * This is parsed as the \"first following Monday after the first Monday in December\"\n */\nvar_dump(date('Y-m-d', strtotime('first Monday December 2008')));\n/*\n * This is parsed as the \"second following Monday after the first Monday in December\"\n */\nvar_dump(date('Y-m-d', strtotime('second Monday December 2008')));\n/*\n * This is parsed as the \"third following Monday after the first Monday in December\"\n */\nvar_dump(date('Y-m-d', strtotime('third Monday December 2008')));\n?>")).toMatchSnapshot();
  });
});
