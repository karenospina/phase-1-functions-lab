  function distanceFromHqInBlocks(pickupLocation) {
    const headquartersLocation = 42;
    const distanceInBlocks = Math.abs(pickupLocation - headquartersLocation);
    return distanceInBlocks;
  }
  
  function distanceFromHqInFeet(blocks) {
    const feetPerBlock = 264;
    const distanceInBlocks = distanceFromHqInBlocks(blocks); 
    const distanceInFeet = distanceInBlocks * feetPerBlock; 
    return distanceInFeet;
  }
  
  console.log(distanceFromHqInFeet(8));


  function distanceTravelledInFeet(startBlock, destinationBlock) {
    const feetPerBlock = 264;
    const distanceInBlocks = Math.abs(destinationBlock - startBlock);
    const distanceInFeet = distanceInBlocks * feetPerBlock;
    return distanceInFeet;
  }
  
  console.log(distanceTravelledInFeet(34, 38));


  function calculatesFarePrice(startBlock, endBlock) {
    const distanceInFeet = distanceTravelledInFeet(startBlock, endBlock);
  
    if (distanceInFeet <= 400) {
      return 0; // First 400 feet are free
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
      const distanceAfter400Feet = distanceInFeet - 400;
      return distanceAfter400Feet * 0.02; // $0.02 per foot
    } else if (distanceInFeet > 2000 && distanceInFeet < 2500) {
      return 25; // Flat fare of $25 for distance over 2000 feet and under 2500 feet
    } else if (distanceInFeet >= 2500) {
      return 'cannot travel that far'; // Cannot travel over 2500 feet
    }
  }
  
  console.log(calculatesFarePrice(34, 38));