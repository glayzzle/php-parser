const parser = require("../main");

describe("block", () => {
  it.each([
    ["single", "{ $var = 1; }"],
    ["empty function block", "function foo() { /* 1 */ }"],
    ["empty class block", "class foo { /* 1 */ }"],
    ["empty method block", "class foo { function bar()  { /* 1 */ } }"],
    ["empty namespace block", "namespace foo { /* 1 */ }"],
    ["empty declare block", "declare(tick=1) { /* 1 */ }"],
    ["empty declare short form", "declare(tick=1): /* 1 */ ENDDECLARE;"],
    ["empty switch", "switch($foo) { /* foo */ }"],
    ["empty for", "for(;;) { /* foo */ }"],
    ["empty foreach", "foreach($foo as $bar) { /* foo */ }"],
    ["empty switch short form", "switch($foo): /* foo */ endswitch;"],
    [
      "empty switch case short form",
      "switch($foo): case 1: /* foo */ endswitch;",
    ],
    ["empty for short form", "for(;;):  /* foo */ endfor;"],
    [
      "empty foreach short form",
      "foreach($foo as $bar): /* foo */ endforeach;",
    ],
    ["empty if", "if($foo) { /* foo */ }"],
    ["empty statement", "/* 1 */; /* 2 */; ; /* 3 */"],
    ["empty if short form", "if($foo): /* foo */ endif;"],
    [
      "empty if #2 short form",
      "if($foo): /* pre */ $a; /* inner */ endif; /* out */",
    ],
    [
      "empty if #3 short form",
      "if($foo): /* foo */ elseif($bar): /* baz */ else: /* bar */ endif;",
    ],
  ])("%s", function (_, code) {
    expect(
      parser.parseEval(code, {
        parser: {
          extractDoc: true,
        },
      })
    ).toMatchSnapshot();
  });
  it("check empty php blocks", function () {
    expect(
      parser.parseCode(
        `<?php
  /**
   * Comment header
   */
?>
SOME HTML OUTPUT
<?php /* Inner comment */
      `,
        "test",
        {
          parser: {
            extractDoc: true,
          },
        }
      )
    ).toMatchSnapshot();
  });

  it("check empty php file", function () {
    expect(
      parser.parseCode(
        `<?php
  /**
   * Comment header
   */
      `,
        "test",
        {
          parser: {
            extractDoc: true,
          },
        }
      )
    ).toMatchSnapshot();
  });
});
