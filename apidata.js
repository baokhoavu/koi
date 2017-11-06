router.post('/', function (req, res, next) {
    db.products.save(
        { item: "envelopes", qty : 100, type: "Clasp" },
        { writeConcern: { w: "majority", wtimeout: 5000 } }
    )
});