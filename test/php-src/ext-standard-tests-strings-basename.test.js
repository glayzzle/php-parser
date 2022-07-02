// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/basename.phpt
  it("basename() function", function () {
    expect(parser.parseCode("<?php\n    // simple checks\n    var_dump(basename(\"bar\"));\n    var_dump(basename(\"/foo/bar\"));\n    var_dump(basename(\"/bar\"));\n    // simple checks with trailing slashes\n    var_dump(basename(\"bar/\"));\n    var_dump(basename(\"/foo/bar/\"));\n    var_dump(basename(\"/bar/\"));\n    // suffix removal checks\n    var_dump(basename(\"bar.gz\", \".gz\"));\n    var_dump(basename(\"/foo/bar.gz\", \".gz\"));\n    var_dump(basename(\"/bar.gz\", \".gz\"));\n    // suffix removal checks with trailing slashes\n    var_dump(basename(\"bar.gz/\", \".gz\"));\n    var_dump(basename(\"/foo/bar.gz/\", \".gz\"));\n    var_dump(basename(\"/bar.gz/\", \".gz\"));\n    // suffix removal checks\n    var_dump(basename(\"/.gz\", \".gz\"));\n    var_dump(basename(\"/foo/.gz\", \".gz\"));\n    var_dump(basename(\"/.gz\", \".gz\"));\n    // binary safe?\n    var_dump(basename(\"foo\".chr(0).\"bar\"));\n    var_dump(basename(\"foo\".chr(0).\"bar.gz\", \".gz\"));\n?>")).toMatchSnapshot();
  });
});
