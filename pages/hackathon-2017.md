---
layout: page
title: CSS Hackathon 2017
permalink: /pages/hackathon-2017
redirect_from: "/hackathon"
---

# Boeing Explore Week Hackathon 2017

## Midday February 27 - Midday February 28

This year we're holding our first ever Explore Week Hackathon! **Make the most of a week free from lectures and deadlines** by entering our biggest, best Hackathon yet.

<a href="https://www.facebook.com/events/392877197725107/" class="btn--dark">Facebook Event</a>
<a href="https://goo.gl/forms/lFDrMaW7tgRLT0ah2" class="btn--dark">Sign Up Now</a>

![CSS Explore Week Hackathon 2017](/assets/images/contrib/events/2017-02-27-hackathon/hackathon-cover-image.png)

## [Sign up now!](https://goo.gl/forms/lFDrMaW7tgRLT0ah2)

Teams can be composed of **up to 6 people**. Make sure you [sign up](https://goo.gl/forms/lFDrMaW7tgRLT0ah2) so we can reserve your place!

Never done something like this before? Don't worry - anyone can participate!

## Prizes

There will be prizes! We'll be publishing more details soon.

## Theme

This year's theme: **build something that might help protect or improve the environment**!

We're deliberately keeping this as broad as possible, because we want to see what you come up with!

Maybe you'll write a piece of software with super-low energy requirements. What about a system for monitoring your vegetable patch? Or a robot that turns off unused appliances? You could write a vision algorithm that detects damage to forests or ice shelves. Perhaps you'll even write a cool visualisation that uses Bristol's Open Data platform.

## Resources

This year, we're keen to help teams with access to any equipment or resources they might need for their project. [Contact us](mailto:webmaster@cssbristol.co.uk) if you know you're going to need something, and we'll see what we can do.

For example, you might want:

* A Raspberry Pi, Arduino, mbed, ESP32 or other development board
* Powerful compute resources, like an Amazon EC2 GPU instance
* Sensors or camera modules

## Ideas

[**Boeing**](http://www.boeing.co.uk/) is our Hackathon sponsor this year. They have a particular interest in environmental monitoring of the Antarctic. Here are some cool ideas they've suggested:

### **Monitoring the Antarctic** with Computer Vision

Use computer vision techniques to analyse polar imagery, looking for cracks or other interesting features. You may have heard recently in the news about a huge crack developing in the Larsen C Ice Shelf. Perhaps you could use the features you pick out to generate a cool map or 3D model?

![Larsen C crack](/assets/images/contrib/events/2017-02-27-hackathon/larsen-c.jpg)

Here are some resources you might find useful:

[Open data from the Copernicus Programme](https://scihub.copernicus.eu/), which is run by the European Commission and the European Space Agency. Once you've registered for free, you can search for data in the [Scientific Hub](https://scihub.copernicus.eu/dhus/). To use the data, you might want to investigate ESA's [STEP Platform](http://step.esa.int/main/). There are lots of [tutorials](https://www.youtube.com/watch?v=10x7UI7oD3E) available.

[Quantarctica](http://quantarctica.npolar.no/) is a free GIS package for exploring a wide variety of open GIS data.

Here's a good list of [free satellite imagery](http://gisgeography.com/free-satellite-imagery-data-list/) put together by GISGeography.

The [British Antarctic Survey](https://data.bas.ac.uk/) maintains a database of their various sets of polar data.

[AntarcticGlaciers.org](http://www.antarcticglaciers.org/antarctica/antarctic-datasets/) also maintains a list of useful datasets.

### **Drone route-planning** for environmental observation

Imagine you want to monitor the environmental condition of a remote region of Earth using drones. There may be a number of points where you can recharge, and a number of spots you are keen to monitor. Perhaps you want to consider the [effect of weather](https://github.com/cambecc/earth) on the drone's flight?

When you're trying to fly a drone around the complex edges of a polar ice cap, efficient route planning becomes particularly important. Could you build a system that suggests the best route? What about a *fleet* of drones?

[ar-drone](https://github.com/felixge/node-ar-drone) is a library that implements the control protocol of the Parrot AR Drone as a Node app. Perhaps you could build a drone simulator that listens to the control output and displays it in 3D? If you're really ambitious, could you get it to control a different model of WiFi drone? Maybe you could do something cool using [voxel-drone](https://github.com/shama/voxel-drone), which simulates ar-drone in a Minecraft-y world?

![Voxel Drone screenshot](/assets/images/contrib/events/2017-02-27-hackathon/voxel-drone.png)

### **Climate projection**

Using the climate data and imagery from above, could you build a model of the effect of temperature on the area of ice? Maybe you could use this to project the change in the area of ice in the future under various different conditions.

The US National Snow and Ice Data Center provides some useful [climate data](https://nsidc.org/data/docs/daac/nsidc0190_surface_obs.gd.html), as does [RealClimate](http://www.realclimate.org/index.php/data-sources/).

### Recommended libraries

You might find some of these libraries useful:
* [OpenCV](http://opencv.org/) - everyone's favourite open-source computer vision library. Remember, it works with Python too!

## Easy hacks

New to hackathons? Don't worry - everyone can contribute something, and it's a great way to gain confidence!

We've put together some easy ideas to get you started.

### **3D Maps** with CesiumJS

[CesiumJS](https://cesiumjs.org/) is a WebGL-based engine for displaying virtual 3D maps and globes in the browser. There are lots of [code examples](http://cesiumjs.org/Cesium/Apps/Sandcastle/index.html?src=Hello%20World.html&label=Showcases) showing how to do things like overlay 3D models on the globe, automatically control the camera, display different layers of imagery and more.

Alternatively, look at [Carto](https://carto.com/builder/) for analysis of location data.

### **Environmental monitoring**

Try building an environmental sensor using a [Raspberry Pi](https://www.raspberrypi.org/products/) and the [Sense HAT](https://www.raspberrypi.org/products/sense-hat/)! You should be able to do this entirely from Python. Once you've got that working, what will you do with the data? Perhaps you can tweet it using the Twitter API. Maybe you can record the results into a database on your server, then build a webapp to display them in the browser.

If you want help getting hold of any of this equipment, let us know! We might be able to provide you with a Raspberry Pi and some other bits.

### Bristol **Open Data** visualisation

Build something cool on top of Bristol's [environmental](https://opendata.bristol.gov.uk/category/Environment) or [energy](https://opendata.bristol.gov.uk/category/Energy) open data. Bath has a [similar datastore](https://data.bathhacked.org/).

[Dashboards](http://www.gridwatch.templar.co.uk/) are always neat!

![Bristol Open Data portal](/assets/images/contrib/events/2017-02-27-hackathon/bristol-open-data.png)

## More ideas

### **Open-source** contributions

Seen a library or project above that you think could use some help? Why not spend your 24 hours working on a patch to contribute back to the community. The same goes for any other open source project that you think might be relevant!

### **Educational** application

Build an app that educates people on some aspect of the environment. Try targeting a platform you haven't used before. Qt on desktop? React Native on mobile? Elm in the browser?
