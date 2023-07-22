export function percentageDiscount(originalPrice: number, discountedPrice: number){
 const percentage = ((Number(discountedPrice - originalPrice)/Number(discountedPrice))*100).toFixed(2);
 return percentage;
}