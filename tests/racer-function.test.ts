import { GasCar } from '../src/gas-car';
import { findAverageSpeed, findRacersWithEmptyFuel, findFastestRacer } from '../src/racer-function';
import { SolarCar } from '../src/solar-car';

describe('emptygas', () => {
    test('an array of gas car where some have no fuel', () => {
    const newcar = new GasCar("Winners", 5);

    const empty = new GasCar("Losers", 0);

    const gasArray = [newcar, empty] 

    expect(findRacersWithEmptyFuel(gasArray)).toContain(empty);

  
    
    });

    test('an array of gas car where all no fuel', () => {
        const newcar = new GasCar("Winners", 0);
    
        const empty = new GasCar("Losers", 0);
    
        const gasArray = [newcar, empty] 
    
        expect(findRacersWithEmptyFuel(gasArray)).toContain(empty);
        
        });

        test('an array of gas car where none have no fuel', () => {
            const newcar = new GasCar("Winners", 5);
        
            const empty = new GasCar("Losers", 6);
        
            const gasArray = [newcar, newcar] 
        
            expect(findRacersWithEmptyFuel(gasArray)).toStrictEqual([]);
        
          
            
            });

            test('an array of solarcar', () => {
                const newcar = new SolarCar("Winners");
            
                const empty = new SolarCar("Losers");
            
                const solarArray = [newcar, empty] 
            
                expect(findRacersWithEmptyFuel(solarArray)).toStrictEqual([]);
            
              
                
                });

                test('an array of solarcar and gascar', () => {
                    const newcar = new GasCar("Winners", 5);
                
                    const empty = new SolarCar("Losers");
                
                    const gasArray = [newcar, empty] 
                
                    expect(findRacersWithEmptyFuel(gasArray)).toStrictEqual([]);
                
                  
                    
                    });
                    test('an array of empty array', () => {
                        
                    
                        const gasArray: any = [] 
                    
                        expect(findRacersWithEmptyFuel(gasArray)).toStrictEqual([]);
                    
                      
                        
                        });
    });

    describe('findingtheaverage', () => {
        test('array of gascar with different speeds', () => {
            const carA = new GasCar("grand circus"); 
            const carB = new GasCar("Newbies")
            carA.speed = 25;
            carB.speed = 45;
            const gascarArray = [carA, carB]


        expect(findAverageSpeed(gascarArray)).toBe(35);
    
      
        });

        test('array of gascar and solarcar with different speeds', () => {
            const carA = new GasCar("grand circus"); 
            const carB = new SolarCar("Newbies")
            carA.speed = 25;
            carB.speed = 45;
            const gascarArray = [carA, carB]


        expect(findAverageSpeed(gascarArray)).toBe(35);
    
      
        });

        test('array of gascar and solarcar with different speeds', () => {
            const carA = new GasCar("grand circus"); 
            const carB = new SolarCar("Newbies")
            carA.speed = 25;
            carB.speed = 45;
            const gascarArray = [carA, carB]


        expect(findAverageSpeed(gascarArray)).toBe(35);
    
      
        });

        test('Do a test case with an array of cars that all have 0 speed. (Expect 0.)', () => {
            const carA = new GasCar("grand circus"); 
            const carB = new SolarCar("Newbies")
            carA.speed = 0;
            carB.speed = 0;
            const gascarArray = [carA, carB]


        expect(findAverageSpeed(gascarArray)).toBe(0);
    
      
        });

        test("do a test with an empty array", () => {
            const carA = new GasCar("grand circus"); 
            const carB = new SolarCar("Newbies")
            carA.speed = 0;
            carB.speed = 0;
            const gascarArray: any = []


        expect(findAverageSpeed(gascarArray)).toBe(0);
    
      
        });

        
        });

        describe('fastest racer', () => {
            test('test with racerA', () => {

                const racerA = new GasCar("Bold")
                const racerB= new GasCar("Italics")

                racerA.speed= 65;
                racerB.speed= 45;

               
          
            expect (findFastestRacer(racerA, racerB)).toBe(racerA);
        
            });
            
            test('test with racerB', () => {

                const racerA = new GasCar("Bold")
                const racerB= new GasCar("Italics")

                racerA.speed= 65;
                racerB.speed= 75;

               
          
            expect (findFastestRacer(racerA, racerB)).toBe(racerB);
        
            });
            test('test with both cars are the same speed', () => {

                const racerA = new GasCar("Bold")
                const racerB= new GasCar("Italics")

                racerA.speed= 75;
                racerB.speed= 75;

               
          
            expect (findFastestRacer(racerA, racerB)).toBe(racerB);
        
            });

            test('test with solarcar and gascar', () => {

                const racerA = new GasCar("Bold")
                const racerB= new SolarCar("Italics")

                racerA.speed= 75;
                racerB.speed= 55;

               
          
            expect (findFastestRacer(racerA, racerB)).toBe(racerA);
        
            });
            });