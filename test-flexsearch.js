var FlexSearch = require("flexsearch");

var index = FlexSearch.create();


var docs = [{
    data:{
        id: 0,
        title: "Foo",
        body: {
            content: "Foobar"
        }
    }
},{
    data:{
        id: 1,
        title: "Bar",
        body: {
            content: "Foobar"
        }
    }
}];

var index = new FlexSearch({
    tokenize: "strict",
    depth: 3,
    doc: {
        id: "id",
        field: "title"
    }
});

index.add(docs);

var index2 = FlexSearch.create();
index2.import("[[{\"quote\":[\"9b48ea98-6281-5e12-b75f-3a5e42e46925\"],\"flacas\":[\"9b48ea98-6281-5e12-b75f-3a5e42e46925\"],\"gimnastas\":[\"9b48ea98-6281-5e12-b75f-3a5e42e46925\"]},{\"de\":[\"9b48ea98-6281-5e12-b75f-3a5e42e46925\"],\"america\":[\"9b48ea98-6281-5e12-b75f-3a5e42e46925\"]}],{\"quote\":[{\"\":[\"9b48ea98-6281-5e12-b75f-3a5e42e46925\"],\"flacas\":[\"9b48ea98-6281-5e12-b75f-3a5e42e46925\"]},{\"gimnastas\":[\"9b48ea98-6281-5e12-b75f-3a5e42e46925\"]}],\"flacas\":[{\"quote\":[\"9b48ea98-6281-5e12-b75f-3a5e42e46925\"],\"gimnastas\":[\"9b48ea98-6281-5e12-b75f-3a5e42e46925\"]},{\"\":[\"9b48ea98-6281-5e12-b75f-3a5e42e46925\"],\"de\":[\"9b48ea98-6281-5e12-b75f-3a5e42e46925\"]}],\"gimnastas\":[{\"flacas\":[\"9b48ea98-6281-5e12-b75f-3a5e42e46925\"],\"de\":[\"9b48ea98-6281-5e12-b75f-3a5e42e46925\"]},{\"quote\":[\"9b48ea98-6281-5e12-b75f-3a5e42e46925\"],\"america\":[\"9b48ea98-6281-5e12-b75f-3a5e42e46925\"]}],\"de\":[{\"gimnastas\":[\"9b48ea98-6281-5e12-b75f-3a5e42e46925\"],\"america\":[\"9b48ea98-6281-5e12-b75f-3a5e42e46925\"]},{\"flacas\":[\"9b48ea98-6281-5e12-b75f-3a5e42e46925\"],\"\":[\"9b48ea98-6281-5e12-b75f-3a5e42e46925\"]}],\"america\":[{\"de\":[\"9b48ea98-6281-5e12-b75f-3a5e42e46925\"],\"\":[\"9b48ea98-6281-5e12-b75f-3a5e42e46925\"]},{\"gimnastas\":[\"9b48ea98-6281-5e12-b75f-3a5e42e46925\"]}]},[\"@9b48ea98-6281-5e12-b75f-3a5e42e46925\"]]");


console.log(index2.search("flacas gimnastas"));
console.log(index2.search("flacas america"));
