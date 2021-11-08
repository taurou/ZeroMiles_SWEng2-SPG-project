function ProductByFarmer(FarmerID, Name, Surname, Company, Email, Phoneno, Address, State, Zipcode,
    ProductID, NameProduct, Description, ImageID, Quantity, UnitOfMeasurement, Price) {
    this.FarmerID = FarmerID;
    this.FarmerName = Name;
    this.FarmerSurname = Surname;
    this.FarmerCompany = Company;
    this.FarmerEmail = Email;
    this.FarmerPhone = Phoneno;
    this.FarmerAddress = Address;
    this.FarmerState = State;
    this.FarmerZipcode = Zipcode;
    this.ProductID = ProductID;
    this.NameProduct = NameProduct;
    this.Description = Description;
    this.ImageID = ImageID;
    this.Quantity = Quantity;
    this.UnitOfMeasurement = UnitOfMeasurement;
    this.Price = Price;
}

function Farmer(Name, Surname, FarmerID, Email, Phoneno, Address, State, Zipcode){
    this.Name = Name;
    this.Surname = Surname;
    this.FarmerID = FarmerID;
    this.Email = Email;
    this.Phoneno = Phoneno;
    this.Address = Address;
    this.State = State;
    this.Zipcode = Zipcode;
}

export { ProductByFarmer, Farmer };