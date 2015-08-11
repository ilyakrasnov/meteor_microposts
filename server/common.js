Meteor.publish('posts', function(){
  return Posts.find();
});

Meteor.publish('ProfileImages', function(){
  return ProfileImages.find();
});

Meteor.publish('UserImanges', function(){
  return UserImages.find();
});

