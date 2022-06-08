// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/exif/tests/bug72618.phpt
  it("Bug 72618 (NULL Pointer Dereference in exif_process_user_comment)", function () {
    expect(parser.parseCode("<?php\nvar_dump(count(exif_read_data(__DIR__ . \"/bug72618.jpg\")));\n?>")).toMatchSnapshot();
  });
});
