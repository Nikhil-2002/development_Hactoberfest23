
var cuss = ['Dalle',"madarchod","gandu",'Teri maa ki chut','tatto ke saudagar','bhosdike','bhen ke lodey','machhar ki jhaant',
'randi ke','Bhadwe','Jhaantu','Saale Sutri ke','Jaake maa chuda','Maa chuda','Lodey pe bauithja','Loda pakad ke Jhool ja','bin baap ki aulaad','Tu wahi haina, jo tatti khata hai','Jaake Goo Khaa' 
];
    
    const generateCuss = ()=>{
       return cuss[Math.floor(Math.random() * cuss.length)]
    }
    
    export default generateCuss