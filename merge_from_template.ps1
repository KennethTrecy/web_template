#!/usr/bin/env pwsh
param($branch)

git checkout $branch
git pull
git checkout merged_template

git merge $branch
if ($LastExitCode -ne 0) {
	& git status

	$answer = Read-Host -prompt "Have you fixed the conflicts? Enter 'y' to continue"
	if ($answer -eq "y") {
		& git add .
		& git commit
	} else {
		exit 1
	}
}

git merge master
if ($LastExitCode -ne 0) {
	& git status

	$answer = Read-Host -prompt "Have you fixed the conflicts? Enter 'y' to continue"
	if ($answer -eq "y") {
		& git add .
		& git commit
	} else {
		exit 1
	}
}

git checkout master
git checkout merged_template -- .

if ($LastExitCode -ne 0) {
	& git status

	$answer = Read-Host -prompt "Have you fixed the conflicts? Enter 'y' to continue"
	if ($answer -ne "y") {
		exit 1
	}
}

& git add .
& git commit
