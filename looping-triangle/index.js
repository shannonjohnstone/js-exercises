/**
 * the goal of this is exercise is using loops to output the following, calling console.log 7 times.
 * 
 * #
 * ##
 * ###
 * ####
 * #####
 * ######
 * #######
 * 
 */

 const hashSymbol = "#"

 for (let i = hashSymbol; i.length <= 7; i += hashSymbol) {
   console.log(i)
 }