###### Framework to display anything in threeJS
1. Scene
2. Renderer
3. Camera



###### Features to create in ThreeJS
1. 🎯 Make pins appear
2. ✅ Make globe appear (See Notes 2)
3. Make multiple pins stick to globe
4. Make a popup when you click on the pin
5. Make it zoomable
6. Make it rotatable
I need to manage the thing somehow.
###### Sub objectives
1. ✅ Make two sphere orbit each other
    1. ✅ Create a coding environment to visualise and test mathematical systems
    2. ✅ Test out the circular movement math system (right angle triangle with a change in degrees)
2. ✅ Create a package for mathematical systems
    1. ✅ Insert the circular motion math system as the first functionality
3. ✅ Create a pin in the testing environment (See rotating_pin.mov)
4. Make the pin stick onto a globe based on coordinates
5. 
---

###### Notes
2. Get a world map image and wrap it around a sphere
    https://github.com/franky-adl/threejs-earth/blob/main/src/assets/Albedo.jpg




###### Development infrastructure
1. Visualising math systems


###### Thoughts
1. A package is essentially a the crystalisation of my memories in executable form that can be used again and again. 



Turn map coordinates into cartesian plane coordinates governed by a sphere.
    - Start: spherical coordinates, latitude and longitude
    - End: cartesian coordinates, x,y,z

To find the latitude (φ) given the radius (r) in a spherical coordinate system, you typically need additional information because the latitude is an angle that measures the north-south position on the Earth’s surface relative to the equator
    Latitude is an angle that measures the north south position on the earth's surface relative to the equator. 



###### Math behind pinpointing points on a sphere
Context: Spherical coordinates
Spherical coordinates determine the position of a point in three-dimensional space based on the distance $ρ$ from the origin and two angles $θ$ and $ϕ$.
    Three dimensional space: x,y,z coordinates
    distance $$p$$ from the origin: radius
        Length:
	        •	 $ρ$ (rho) is the radius of the sphere.
        Angle:
	        •	 $θ$ (theta) is the polar angle, the angle from the positive z-axis.
	        •	 $ϕ$ (phi) is the azimuthal angle, the angle from the positive x-axis in the xy-plane.
        



