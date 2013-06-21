#!/bin/bash

DATE=`date "+%Y%m%d-%H%M%S"`
read -p "Comment: " COMMENT

echo "$DATE
$COMMENT" > /SNAPSHOT

btrfs subvolume snapshot -r /run/btrfs-root/__active/ROOT /run/btrfs-root/__snapshot/ROOT@$DATE
btrfs subvolume delete /run/btrfs-root/__snapshot/LATEST
btrfs subvolume snapshot -r /run/btrfs-root/__snapshot/ROOT@$DATE /run/btrfs-root/__snapshot/LATEST

rm /SNAPSHOT
