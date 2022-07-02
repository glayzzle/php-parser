// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug26973.phpt
  it("Bug #26973 (*printf() '+' modifier problem)", function () {
    expect(parser.parseCode("<?php\nprintf(\"%+05d\\n\", 200);\nprintf(\"%+05d\\n\", -200);\nprintf(\"%+05f\\n\", 200);\nprintf(\"%+05f\\n\", -200);\nprintf(\"%+05u\\n\", 200);\nprintf(\"%+05u\\n\", -200);\necho \"---\\n\";\nprintf(\"%05d\\n\", 200);\nprintf(\"%05d\\n\", -200);\nprintf(\"%05f\\n\", 200);\nprintf(\"%05f\\n\", -200);\nprintf(\"%05u\\n\", 200);\nprintf(\"%05u\\n\", -200);\n?>")).toMatchSnapshot();
  });
});
