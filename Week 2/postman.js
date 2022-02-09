let apod = {
    "copyright": "Alexandre Correia",
    "date": "2022-02-08",
    "explanation": "Which half of this sky is your favorite? On the left, the night sky is lit up by particles expelled from the Sun that later collided with Earth's upper atmosphere \u2014 creating bright auroras.  On the right, the night glows with ground lights reflected by millions of tiny ice crystals falling from the sky \u2014 creating  light pillars.  And in the center, the astrophotographer presents your choices. The light pillars are vertical columns because the fluttering ice-crystals are mostly flat to the ground, and their colors are those of the ground lights. The auroras cover the sky and ground in the green hue of glowing oxygen, while their transparency is clear because you can see stars right through them. Distant stars dot the background, including bright stars from the iconic constellation of Orion.  The featured image was captured in a single exposure two months ago near Kautokeino, Norway.",
    "hdurl": "https://apod.nasa.gov/apod/image/2202/AuroraPillars_Correia_4898.jpg",
    "media_type": "image",
    "service_version": "v1",
    "title": "Aurora and Light Pillars over Norway",
    "url": "https://apod.nasa.gov/apod/image/2202/AuroraPillars_Correia_960.jpg"
}
for (key in apod) {
    let info = document.createElement("h4");
    info.innerHTML = `${key}: ${apod[key]}`;
    document.body.appendChild(info);
}
