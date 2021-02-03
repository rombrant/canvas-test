const id = () => Math.floor(Math.random() * 9999);

const assetOfStars = [
    {
        color: "#ff3300",
        cx: 50,
        cy: 100,
        spikes: 5,
        outerRadius: 30,
        innerRadius: 15,
        id: id(),
    },
    {
        color: "#0000b3",
        cx: 150,
        cy: 100,
        spikes: 5,
        outerRadius: 30,
        innerRadius: 15,
        id: id(),
    },
    {
        color: "#009933",
        cx: 250,
        cy: 100,
        spikes: 5,
        outerRadius: 30,
        innerRadius: 15,
        id: id(),
    },
    {
        color: "#ffff00",
        cx: 350,
        cy: 100,
        spikes: 5,
        outerRadius: 30,
        innerRadius: 15,
        id: id(),
    },
    {
        color: "#000000",
        cx: 450,
        cy: 100,
        spikes: 5,
        outerRadius: 30,
        innerRadius: 15,
        id: id(),
    }
];

export { assetOfStars };
