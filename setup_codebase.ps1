#!/usr/bin/env pwsh
param($branch, $template_url = "https://github.com/KennethTrecy/web_template")
git remote add template $template_url
git fetch template $branch
git checkout template/$branch
git checkout -b template--$branch
git checkout -b merged_template
git merge master --allow-unrelated-histories

if ($LastExitCode -ne 0) {
	& git status

	$answer = Read-Host -prompt "Have you fixed the conflicts? Enter 'y' to continue"
	if ($answer -eq "y") {
		& git add .
		& git commit
	} else {
		git branch -d template--$branch merged_template
		git remote remove template
		exit 1
	}
}

Remove-Item setup_codebase.ps1
git add setup_codebase.ps1
git commit -m "chore: remove setup script"
Write-Output "Removed setup script."

& ./merge_from_template $branch
