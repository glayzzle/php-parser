// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/krsort_variation10.phpt
  it("Test krsort() function : usage variations - sort heredoc strings", function () {
    expect(parser.parseCode("<?php\n/*\n * testing krsort() by providing array of heredoc strings for $array argument with\n * following flag values:\n *  1.flag value as default\n *  2.SORT_REGULAR - compare items normally\n *  3.SORT_STRING  - compare items as strings\n*/\necho \"*** Testing krsort() : usage variations ***\\n\";\n// Different heredoc strings to be sorted\n$simple_heredoc1 =<<<EOT\nHeredoc\nEOT;\n$simple_heredoc2 =<<<EOT\nHEREDOC\nEOT;\n$multiline_heredoc =<<<EOT\nheredoc string\\twith!@# and 123\nTest this!!!\nEOT;\n$array = array (\n  $simple_heredoc1 => \"Heredoc\",\n  $simple_heredoc2 => \"HEREDOC\",\n  $multiline_heredoc => \"heredoc string\\twith!@# and 123\\nTest this!!!\"\n);\necho \"\\n-- Testing krsort() by supplying heredoc string array, 'flag' value is default --\\n\";\n$temp_array = $array;\nvar_dump(krsort($temp_array) ); // expecting : bool(true)\nvar_dump($temp_array);\necho \"\\n-- Testing krsort() by supplying heredoc string array, 'flag' = SORT_REGULAR --\\n\";\n$temp_array = $array;\nvar_dump(krsort($temp_array, SORT_REGULAR) ); // expecting : bool(true)\nvar_dump($temp_array);\necho \"\\n-- Testing krsort() by supplying heredoc string array, 'flag' = SORT_STRING --\\n\";\n$temp_array = $array;\nvar_dump(krsort($temp_array, SORT_STRING) ); // expecting : bool(true)\nvar_dump($temp_array);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
