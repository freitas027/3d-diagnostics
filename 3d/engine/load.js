export const options = {
    "scale": [1, 1, 1],
    "lightIntensity": 20,
    "lights": [[-5, 0, -5], [5, 0, 5], ],
    "initialCam": {
        position: {x: 0.17168198962659312, y: 3.29313225646841, z: 6.616030289016084},
        rotation: {x: -0.4618463747165094, y: 0.023226533266404125, z: 0.01155946376099527},
        target: {x: 0, y: 0, z: 0},
    }
}

export const cards = {
    1: {
        title: "Check the rear light",
        cam: {
            position: {x: -0.0066790414489851105, y: 1.440675270846417, z: -4.957209114254104},
            rotation: {x: -2.858761347973418, y: -0.0012938073948015468, z: -3.141216644495139},
            target: {x: 0, y: 0, z: 0},
        },
        description: "Check the rear light. If it is on, proceed to the next step.",
    },

    2: {
        title: "Check the front light",
        cam: {
            position: {x: 0.01684106993047403, y: 1.6077504588468974, z: 4.700511204122747},
            rotation: {x: -0.32956362050037197, y: 0.003389989607191369, z: 0.0011595003666995212},
            target: {x: 0, y: 0, z: 0},
        },
        description: "Check the front light. If it is on, proceed to the next step.",
    }

}