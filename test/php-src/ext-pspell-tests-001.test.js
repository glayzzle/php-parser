// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pspell/tests/001.phpt
  it("pspell basic tests (warning: may fail with pspell/aspell < GNU Aspell 0.50.3)", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL);\n$string = \"\";\n$string .= \"I will not buy this record, it is scratched. \";\n$string .= \"Sorry \";\n$string .= \"I will not buy this record, it is scratched. \";\n$string .= \"Uh, no, no, no. This is a tobacconist's \";\n$string .= \"Ah! I will not buy this tobacconist's, it is scratched. \";\n$string .= \"No, no, no, no. Tobacco... um... cigarettes (holds up a pack). \";\n$string .= \"Ya! See-gar-ets! Ya! Uh... My hovercraft is full of eels. \";\n$string .= \"Sorry? \";\n$string .= \"My hovercraft (pantomimes puffing a cigarette)... is full of eels (pretends to strike a match). \";\n$string .= \"Ahh, matches!\";\n$pspell = pspell_new (\"en\", \"\", \"\", \"\", (PSPELL_FAST|PSPELL_RUN_TOGETHER));\n$array = explode(' ',preg_replace('/[^a-zA-Z0-9 ]/','',$string));\nfor($i=0,$u=count($array);$i<$u;++$i) {\n    echo $array[$i].' : ';\n    if (!pspell_check($pspell, $array[$i])) {\n        echo \"..false\\n\";\n        echo \"Possible spellings: \" . join(',',pspell_suggest ($pspell, $array[$i])) . \"\\n\";\n    } else {\n        echo \"true\\n\";\n    }\n}\n?>")).toMatchSnapshot();
  });
});
