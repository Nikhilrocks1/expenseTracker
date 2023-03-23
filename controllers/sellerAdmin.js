const sellerAdmin = require('../models/sellerAdmin');
const SellerAdmin = require('../models/sellerAdmin');

exports.addProduct = async (req, res, next)=> {
   
    try{   
    
    const choosePrice = req.body.choosePrice;
    const description = req.body.description;
    const chooseProduct = req.body.chooseProduct;
    
    const data = await SellerAdmin.create( {choosePrice: choosePrice, description: description, chooseProduct: chooseProduct} )
    res.status(201).json({newProduct: data});
    } catch(err){
       res.status(500).json({
          error: err
       })
      
    } 

}

exports.getProducts = async (req, res, next) => {
    try{
     const products = await SellerAdmin.findAll();
     res.status(200).json({allProducts: products})
    } catch(error){
     console.log('Get expense is failing', JSON.stringify(error));
     res.status(500).json({error: err})
    }
}

exports.deleteExpense = async (req, res) => {
    const eId = req.params.id;
    try{
    if(req.params.id == 'undefined'){
       console.log('ID is missing');
      return res.status(400).json({err: 'ID is missing'})
    }
    await SellerAdmin.destroy({where: {id: eId}});
    res.sendStatus(200);
    } catch(err){
       console.log(err);
       res.status(500).json(err)
    }
}
