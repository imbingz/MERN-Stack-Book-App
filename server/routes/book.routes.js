const router = require('express').Router();
const { Book } = require('../models');


router
    .route('/')
    /** /api/books get */ 
	.get((req, res) => {
		Book.find({})
			.then(data => {
				console.log('get / route', data);
				res.json({ success: true, data });
			})
			.catch(e => {
				console.error(e);
				res.json({ success: false });
			});
    })
    /** /api/books post */ 
	.post(({body}, res) => {
        // console.log(`api/books post body:`, body);
        Book.findOne({id: body.id}).exec((err, book) => {
            if (book) {
                // console.log('found the duplicated book');
                return res.json({message: 'This book is already saved'})
            }
            Book.create(body)
			.then(data => {
                console.log('response data sent after creating doc:', data);
				res.json({ success: true, data });
			})
			.catch(e => {
				console.error(e);
				res.json({ sucess: false });
			});

        })
		
	});

/** /api/books/:id delete */ 
router.route('/:id').delete((req, res) => {
	console.log(req.params);

	Book.findOneAndDelete({id: req.params.id})
		.then(data => {
            if(data) {
                console.log('deleted book data res', data);
			   return res.json({ success: true, data });      
		}})
		.catch(err => {
			res.json({ success: false });
		});
});

module.exports = router;