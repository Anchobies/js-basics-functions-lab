const distanceFromHqInBlocks = location => Math.abs(location - 42);

const distanceFromHqInFeet = location => distanceFromHqInBlocks(location) * 264;

const distanceTravelledInFeet = (start, end) => Math.abs(start - end) * 264;

const calculatesFarePrice = (start, end) => {
    const distance = distanceTravelledInFeet(start, end);

    if (distance <= 400) {
        return 0;
    } else if (distance > 2500) {
        return "cannot travel that far";
    } else if (distance > 2000) {
        return 25;
    } else if (distance > 400) {
        return 0.02 * (distance - 400);
    }
}