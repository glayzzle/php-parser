// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/short_tags.004.phpt
  it("short_open_tag: Off", function () {
    expect(parser.parseCode("<%= 'so should this' %>\n<?php\n$a = 'This gets echoed twice';\n?>\n<?= $a?>\n<%= $a%>\n<? $b=3; ?>\n<?php\n   echo \"{$b}\";\n?>\n<?= \"{$b}\"?>")).toMatchSnapshot();
  });
});
