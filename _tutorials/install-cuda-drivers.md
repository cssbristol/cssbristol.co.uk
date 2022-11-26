---
layout: tutorial
published: true
title:  "Install Nvidia CUDA Drivers on Ubuntu"
date:   2017-02-20 01:52:00 +0100
author: 
  name: "John Griffith"

abstract: "Here we'll take a look at how to install drivers onto your freshly installed Ubuntu box."
---

Notes:
This guide was written using an Ubuntu 16.04 image, therefore it may not work on other systems

 1. Connect to your AWS Instance, for instructions follow this [guide](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AccessingInstances.html)
 2. Next we install the dependencies for the CUDA installation
	 4. First update the package manage
	 5. `sudo apt-get update`
	 6. Install build essentials
	 7. `sudo apt-get install build-essential`
	 8. The newer versions of gcc and g++ can cause issues with popular machine learning libraries, so we'll install older versions:
	 4. `sudo apt-get install gcc-4.9`
	 5. `sudo apt-get install g++-4.8`
	 6. Remove the original version and replace them with symbolic links to the older versions:
	 7. `sudo rm -f /usr/bin/gcc`
	 8. `sudo rm -f /usr/bin/g++`
	 7. `sudo ln -s /usr/bin/g++-4.8 /usr/bin/g++`
	 8. `sudo ln -s /usr/bin/gcc-4.9 /usr/bin/gcc`
	 9. Install the missing Linux header files:
	 10. `sudo apt-get install linux-headers-generic`
	 11. Next, reboot the server: `sudo reboot`
 3. Download the CUDA toolkit
	 8. In your webrowser navigate to the [CUDA download section](https://developer.nvidia.com/cuda-downloads)
	 9. Navigate through to your target platform
	 10. For our target platform of Ubuntu 16.04, navigate: Linux > x86_64 > Ubuntu > 16.04 > run file (local)
	 10. Right click on the download link and select `copy link`
	 11. Back in the terrainal window type `wget <your_link>` where `<your_link>` is the link you copied in the previous step
	 12. After the file has downloaded, change the permissions using `chmod 751 <file_name>` so we can run it
 4.  Next run the installation `./<file_name>`
	 14. After reading the EULA press `q` to begin the installation
	 15. Follow the installation steps
 17. Next install NVIDIA Toolkit `sudo apt-get install nvidia-cuda-toolkit` 
 18. Reboot the server `sudo reboot`
 19. If you have installed the Nvidia sample pack, build and the `deviceQuery` program located in `<sample_dir>/1_Utilities/deviceQuery`
