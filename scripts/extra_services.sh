#!/usr/bin/env sh

# Simple script of daemons for arch-dev machine that are not always used. ###
# Run with an argv of "1" "11" "0" or "00"
#  Input 0 stops, 00 disables and stops
#  Input 1 starts, 11 enables and starts.


#modules=(webmin.service postgresql.service privoxy.service sshd.service nginx.service)

#if [[ -o "off"]]; then
#  sudo systemctl stop $modules
#elif [[ -o "off!"]]; then
#  sudo systemctl stop $modules
#  sudo systemctl disable $modules
#elif [[ -o "on"]]; then
#  sudo systemctl start $modules
#elif [[ -o "on!" ]]; then
#  sudo systemctl start $modules
#  sudo systemctl enable $modules
#else
#  echo "Bad option. Try again."
#fi
#exit 0
#!/bin/bash
# This script lets you present different menus to Tux.  He will only be happy
# when given a fish.  We've also added a dolphin and (presumably) a camel.

if [ "$1" == "on" -o "$1" == "on!" ]; then
  echo "Starting modules"
  sudo systemctl start $modules
  if [ "$1" == "on!" ]; then
    echo "Enabling modules for next boot."
    sudo systemctl enable $modules
    exit 1
  elif [ "$1" == "off" -o "$1" == "off!" ]; then
    echo "Stopping modules!"
    sudo systemctl stop $modules
  elif [ "$1" == "off!" ]; then
    echo "Disabling the modules"
    sudo systemctl disable $modules
    exit 1
  fi
else
  echo "Your command is done. Goodbye."
  exit 1
fi

