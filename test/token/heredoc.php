<?php

    function addFrozenConstructor()
    {
        $targetDirs = $this->exportTargetDirs();

        $code = <<<EOFX

    /*{$this->docStar}
     * Constructor.
     */
    public function __construct()
    {{$targetDirs}
EOFX;

        if ($this->container->getParameterBag()->all()) {
            $code .= "\n        \$this->parameters = \$this->getDefaultParameters();\n";
        }

        $code .= "\n        \$this->services = array();\n";
        $code .= $this->addMethodMap();
        $code .= $this->addAliases();

        $code .= <<<'EOF'
    }

EOF;

        return $code;
    }


$fallbackContent .= sprintf(<<<EOF2
\$catalogue%s = new MessageCatalogue('%s', %s);
\$catalogue%s->addFallbackCatalogue(\$catalogue%s);
EOF2
);

/* @todo : should pass : */
  $js =<<<"EOJ"
EOJ
    . "text";

    $opml = <<<EOF1
   text="{$feeds[0]['title[0][value]']}"
   foo=$bar
   baz=${$foo}
   baz=${foo}
   zoo=$($zoo)
   aaa=$${$zoo}
   aaa={{$zoo->dump}}
EOF1;

  $expected = <<<'EXPECTED'
$no_index_value_scalar = TRUE;
$no_index_value_foo['foo']['value'] = NULL; // comment
EXPECTED
;

  $expected = <<<BAR
\
BAR;

  $expected = <<<'BAR'
'BAR';

  $expected = <<<BAR
${foo}
BAR;

  echo $expected;

  $expected = <<<BAR
{$foo->test}
BAR;
