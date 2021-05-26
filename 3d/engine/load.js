export const options = {
    "scale": [1, 1, 1],
    "lightIntensity": 20,
    "lights": [[-5, 0, -5], [5, 0, 5], ],
    "initialCam": {
        position: {x: -34.75078254117442, y: 51.61112243488085, z: 60.386325031834254},
        rotation: {x: -0.707206100611286, y: -0.41238035090623004, z: -0.3300217739148964},
        target:  {x: 0, y: 0, z: 0},
    }
}

export const cards = {
    1: {
        title: "Check the gears",
        cam: {
            position: {x: 12.781727415168959, y: 87.83148954878708, z: -1.2628466788187822},
            rotation: {x: -1.5707964691851497, y: -9.898105958751574e-7, z: -1.7136721835719435},
            target: {x: 12.781814351707972, y: 1.0651103933229332e-16, z: -1.2628341724707592},
        },
        description: "Check the state of the gears. Continue if they are not degraded.",
    },

    2: {
        title: "Check the connecting rods",
        cam: {
            position: {x: -11.56734690008313, y: 4.555107833901739, z: -17.774078081415748},
            rotation: {x: -2.940388499380928, y: -0.6399994892037386, z: -3.020383477413137},
            target: {x: 5.4028058088121655, y: 8.520773443593763e-17, z: 4.558825536200583},
        },
        description: "Check the state of the gears. Continue if they are not degraded.",
    },
    3: {
        title: "Check the screws",
        cam: {
            position: {x: -10.1110498512533, y: 1.867318952174706, z: 16.371667389593267},
            rotation: {x: -0.8100759912455939, y: -0.39195866234645693, z: -0.38165598730577716},
            target: {x: -9.045459139410218, y: 2.5468268611773763e-17, z: 14.594309409977965},
        },
        description: "Check if all the screws are secured and well preserved."
    }

}