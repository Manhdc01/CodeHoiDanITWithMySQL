const { uploadSingleFile } = require("../services/fileService");
const {createCustomerService,createArrayCustomerService} = require("../services/customerService")
//cách viết khác để kh phải khai báo lại hàm nhiều lần
module.exports =  {
    postCreateCustomer : async (req, res) => {
        let {name, address, phone, email, description} = req.body;
 
        let imageUrl = ""
        console.log("check >>>", name, description)
        // image: String,

        if (!req.files || Object.keys(req.files).length === 0) {
            //do nothing
        }
        else{
            let result = await uploadSingleFile(req.files.image)
            imageUrl = result.path
        }
        let customerData = {
            name, 
            address, 
            phone, 
            email, 
            description, 
            image: imageUrl
        }
        let customer = await createCustomerService(customerData)
        return res.status(200).json(
            {
                EC: 0,
                data: customer
            }
        )
    },
    postCreateArrayCustomer: async (req, res) => {
        let customer = await createArrayCustomerService(req.body.customers)
        return res.status(200).json(
            {
                EC: 0,
                data: customer
            }
        )

    }
}