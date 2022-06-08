// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/tokenizer/tests/token_get_all_variation11.phpt
  it("Test token_get_all() function : usage variations - with control structure tokens", function () {
    expect(parser.parseCode("<?php\n/*\n * Using different control structure keywords\n *   if..else, elseif - T_IF(301), T_ELSEIF(302), T_ELSE(303)\n *   while - T_WHILE(318)\n *   do...while - T_DO(317)\n *   for - T_ENDFOR(320)\n *   foreach - T_ENDFOREACH(322)\n *   switch...case - T_ENDSWITCH(327), T_CASE(329)\n *   break - T_BREAK(331)\n *   continue - T_CONTINUE(332)\n*/\necho \"*** Testing token_get_all() : for control structure tokens ***\\n\";\n// if..elseif....else\necho \"-- with if..elseif..else..tokens --\\n\";\n$source = '<?php\nif($a == true) {\n     echo \"$a = true\";\n}\nelseif($a == false) {\n  echo false;\n}\nelse\n  echo 1;\n?>';\nvar_dump( token_get_all($source));\n// while..., do..while, break, continue\necho \"-- with while..., do..while, switch & continue tokens --\\n\";\n$source = \"<?php while(true) {\necho 'True';\nbreak;\n}\ndo {\ncontinue;\n}while(false); ?>\";\nvar_dump( token_get_all($source));\n// for..., foreach( as )\necho \"-- with for..foreach( as ) tokens --\\n\";\n$source = '<?php for($count=0; $count < 5; $count++) {\necho $count;\n}\nforeach($values as $index) {\ncontinue;\n} ?>';\nvar_dump( token_get_all($source));\n// switch..case, default\necho \"-- with switch...case tokens --\\n\";\n$source = '<?php switch($var)\ncase 1: break;\ndefault: echo \"default\"; ?>';\nvar_dump( token_get_all($source));\necho \"Done\"\n?>")).toMatchSnapshot();
  });
});
