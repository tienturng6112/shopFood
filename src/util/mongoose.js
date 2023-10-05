module.exports = {
    // Fix lỗi khi phiên bản handlebar sau 4.6 có bảo mật cao
    multipleMongooseToObject: function (mongooseArray){
        return mongooseArray.map(item => item.toObject());
    },
    mongooseToObject: function (mongooseObject) {
        console.log(mongooseObject)
        return mongooseObject ? mongooseObject.toObject() : mongooseObject;
    }
};
