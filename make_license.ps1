param($mode)

if ($mode -eq "strict" || $mode -eq "gone") {
	& git revert 0daa8ded
	Write-Output "Reverted to MIT license."
}

if ($mode -eq "gone") {
	& git revert 86a573af
	Write-Output "Removing the license."
}

if ($mode -eq "retain") {
	Write-Output "License will be retained."
}

Write-Output "Removing this script."
Remove-Item make_license.ps1
