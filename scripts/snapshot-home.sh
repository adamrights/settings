#!/bin/bash

DATE=`date "+%Y%m%d-%H%M%S"`
read -p "Comment: " COMMENT

echo "$DATE
$COMMENT" > /SNAPSHOT

btrfs subvolume snapshot -r /run/btrfs-root/__active/home /run/btrfs-root/__snapshot/home@$DATE
btrfs subvolume delete /run/btrfs-root/__snapshot/LATEST-HOME
btrfs subvolume snapshot -r /run/btrfs-root/__snapshot/home@$DATE /run/btrfs-root/__snapshot/LATEST-HOME

rm /SNAPSHOT
