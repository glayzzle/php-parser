// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/imageantialias_error2.phpt
  it("Testing wrong parameter passing in imageantialias() of GD library", function () {
    expect(parser.parseCode("<?php\n/*\nIt seems the second argument passing is not being correctly checked.\nThis test is failing due to this wrogn check\n*/\n$image = imagecreatetruecolor(180, 30);\nvar_dump(imageantialias($image, 'wrong param')); // 'wrogn param' is converted to true\n?>")).toMatchSnapshot();
  });
});
