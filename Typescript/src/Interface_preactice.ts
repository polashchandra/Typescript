{
  interface devoloper<T> {
    name: string;
    computer: {
      brand: string;
      model: number;
      relesyer: number;
    };
    watch:T
  }
 interface applewhitch{
    brandName:string,
    modelName:number
  }
  const watch:devoloper<applewhitch>={
    name: "polash",
    computer: {
      brand: "Samsung glaxy",
      model: 123,
      relesyer: 2024
    },
    watch: {
      brandName: "Apple",
      modelName: 2003
    }
  }
}
