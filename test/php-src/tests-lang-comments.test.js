// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/comments.phpt
  it("#-style comments", function () {
    expect(parser.parseCode("#teste\n#teste2\n<?php\n#ahahah\n#ahhfhf\necho '#ola'; //?\necho \"\\n\";\necho 'uhm # ah'; #ah?\necho \"\\n\";\necho \"e este, # hein?\";\necho \"\\n\";\n?>")).toMatchSnapshot();
  });
});
