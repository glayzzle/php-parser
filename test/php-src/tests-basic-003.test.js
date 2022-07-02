// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/basic/003.phpt
  it("GET and POST Method combined", function () {
    expect(parser.parseCode("<?php\nerror_reporting(0);\necho \"post-a=({$_POST['a']}) get-b=({$_GET['b']}) get-c=({$_GET['c']})\"?>")).toMatchSnapshot();
  });
});
