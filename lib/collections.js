// Profile Images
ProfileImages = new FS.Collection('PeofileImages', {
  stores: [new  FS.Store.GridFS('ProfileImages')]
});

 UserImages = new Mongo.Collection('UserImages');
