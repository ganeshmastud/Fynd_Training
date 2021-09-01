 const iphone11={
            name:'iphone11',
            manufacturer:'Apple',
            price:699,
            specs:{
                color:'white',
                memory:{
                    value:128,
                    unit:'MB'
                },
                cameras:{
                    front:'12 MP Wide',
                    rear:'12 MP Ultra Wide'
                },
                availableColors:['Black', 'red','white', 'green']

            },
            CalculateDiscountedPrice: function(percentage){
                return this.price*(100-percentage)/100;
            }
        }
        const {name, 
               manufacturer: brand,
               specs:{
                      memory:{
                        value:ram
                      },
                      cameras:{
                        rear:rearCamera
                      }, 
                      availableColors:secondColor
              },...optional } = iphone11;
        // console.log(name, brand, ram, rearCamera, secondColor[3]);
       

// 