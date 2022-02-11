<?php

$finder = PhpCsFixer\Finder::create()
    ->exclude(["vendor"])
    ->notPath("*");

return (new PhpCsFixer\Config())->setRules([
        "@PSR12" => true,
        "single_quote" => false,
        "ordered_imports" => [
            "sort_algorithm" => "length",
        ],
    ])
    ->setLineEnding("\n")
    ->setFinder($finder);
