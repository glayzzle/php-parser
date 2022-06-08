// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug51532.phpt
  it("SPL: Allow valid extension of SplFileObject::fscanf", function () {
    expect(parser.parseCode("<?php\nclass A extends SplFileObject {\n    public function fscanf($format, &...$vars): array|int|null {\n    }\n}\n?>\n===DONE===")).toMatchSnapshot();
  });
});
