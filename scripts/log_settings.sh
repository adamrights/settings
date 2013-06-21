#!/bin/bash

uname --all && 

cat /proc/self/mountinfo | grep "btrfs" &&

systemd-analyze time && 

systemd-analyze blame &&

cat /etc/mkinitcpio.conf && 

archey
