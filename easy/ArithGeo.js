function ArithGeo(arr) { 
    let ArithK = arr[1] - arr[0];
    let GeoK = arr[1] / arr[0];
    let Arithmetic = true;
    let Geometric = true;
    for (let i = arr.length - 1; i > 0; i --) {
        if (Arithmetic) {
            if ((arr[i] - ArithK) != arr[i-1]) Arithmetic = false;
        }

        if (Geometric) {
            if ((arr[i] / GeoK) != arr[i-1]) Geometric = false;
        }
    }

    if (Arithmetic) return "Arithmetic";
    else if (Geometric) return "Geometric";
    else return -1;
}
const input = [2, 6, 18, 54];

console.log(ArithGeo(input));
