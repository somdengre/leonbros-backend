class Features {
    constructor(query, queryStr) {
      this.query = query;
      this.queryStr = queryStr;
    }
  
    //To search for a particular product by name(gives those product as well whose name contain part of searched name)
    search() {
      const keyword = this.queryStr.keyword
        ? {
            oem: {
              $regex: this.queryStr.keyword, //Matches to name even if it is present in some part of that word
              $options: "i", //Makes case insensitive
            },
          }
        : {};
  
      this.query = this.query.find({ ...keyword });
      return this;
    }
  
    pagination(resultPerPage){
        const currentPage = Number(this.queryStr.page) || 1;
  
        //skip defines how many products to skip to display on a particular page
        const skip = resultPerPage * (currentPage - 1);
  
        this.query = this.query.limit(resultPerPage).skip(skip);
        return this;
    }
  }
  
  module.exports = Features;