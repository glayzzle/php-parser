// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/basic/enable_post_data_reading_07.phpt
  it("enable_post_data_reading: seeking in php://input", function () {
    expect(parser.parseCode("<?php\necho \"Test\\n\";\n$f1 = fopen(\"php://input\", \"r\");\nfseek($f1, 3, SEEK_SET);\necho fgetc($f1);\nfseek($f1, 1, SEEK_SET);\necho fgetc($f1);\nfseek($f1, 3, SEEK_CUR);\necho fgetc($f1);\nfseek($f1, -3, SEEK_CUR);\necho fgetc($f1);\nfseek($f1, 3, SEEK_END);\necho fgetc($f1);\nfseek($f1, -3, SEEK_END);\n$f2 = fopen(\"php://input\", \"r\");\nfseek($f2, 1, SEEK_SET);\necho fgetc($f1);\necho fgetc($f2);\n?>\nDone")).toMatchSnapshot();
  });
});
