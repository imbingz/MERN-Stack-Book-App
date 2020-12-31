
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
		Book.create(
		  body
		)
			.then(data => {
				res.json({ success: true, data });
			})
			.catch(e => {
				console.error(e);
				res.json({ sucess: false });
			});
	});

/** /api/books/:id delete */ 
router.route('/:id').delete((req, res) => {
	console.log(req.params);

	Book.findByIdAndDelete(req.params.id)
		.then(data => {
			res.json({ success: true });
		})
		.catch(err => {
			res.json({ success: false });
		});
});

module.exports = router;