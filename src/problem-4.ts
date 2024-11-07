
// method 1 with out OOP

type Circle = {
    shape: string,
    radius:number
}
type Rectangle = {
    shape:string,
    width: number,
    height: number,
}

type Shape = Circle | Rectangle;

function calculateShapeArea ( object : Shape) : number{
    let result : number = 0
    if(object.shape.toLowerCase() === "circle" ){
        const data = (Math.PI * (object as Circle).radius* (object as Circle).radius).toFixed(2);
        result = parseFloat(data)
    }else if(object.shape.toLowerCase() === "rectangle" ){
        result = (object as Rectangle).height * (object as Rectangle).width;
    }
    return result;
}

const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
  });
  console.log(circleArea,rectangleArea);
  