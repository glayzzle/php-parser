// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/class_example.phpt
  it("Classes general test", function () {
    expect(parser.parseCode("<?php\n/* pretty nifty object oriented code! */\nclass user {\n  public $first_name,$family_name,$address,$phone_num;\n  function display()\n  {\n    echo \"User information\\n\";\n    echo \"----------------\\n\\n\";\n    echo \"First name:\\t  \".$this->first_name.\"\\n\";\n    echo \"Family name:\\t  \".$this->family_name.\"\\n\";\n    echo \"Address:\\t  \".$this->address.\"\\n\";\n    echo \"Phone:\\t\\t  \".$this->phone_num.\"\\n\";\n    echo \"\\n\\n\";\n  }\n  function initialize($first_name,$family_name,$address,$phone_num)\n  {\n    $this->first_name = $first_name;\n    $this->family_name = $family_name;\n    $this->address = $address;\n    $this->phone_num = $phone_num;\n  }\n};\nfunction test($u)\n{  /* one can pass classes as arguments */\n  $u->display();\n  $t = $u;\n  $t->address = \"New address...\";\n  return $t;  /* and also return them as return values */\n}\n$user1 = new user;\n$user2 = new user;\n$user1->initialize(\"Zeev\",\"Suraski\",\"Ben Gourion 3, Kiryat Bialik, Israel\",\"+972-4-8713139\");\n$user2->initialize(\"Andi\",\"Gutmans\",\"Haifa, Israel\",\"+972-4-8231621\");\n$user1->display();\n$user2->display();\n$tmp = test($user2);\n$tmp->display();\n?>")).toMatchSnapshot();
  });
});
