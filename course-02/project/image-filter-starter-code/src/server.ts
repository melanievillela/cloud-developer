import express from 'express';
import bodyParser from 'body-parser';
import {filterImageFromURL, deleteLocalFiles} from './util/util';

(async () => {

  // Init the Express application
  const app = express();

  // Set the network port
  const port = process.env.PORT || 8082;
  
  // Use the body parser middleware for post requests
  app.use(bodyParser.json());
 
  // Displays a simple message to the user
  app.get( "/", async ( req, res ) => {
    res.send("Make your request!")
  } );

  // Filter and Delete Image  
  app.get( "/filteredimage", async ( req, res ) => {
    let imageURL: string = (req.query.image_url);
    if (!imageURL) {
      res.status(400).send('Bad Request')
    } else {
      res.status(200)
      const filteredImage = await filterImageFromURL(imageURL);
      res.sendFile(filteredImage, function (err) {
        if (err) {
          res.send(err)
        } else {
          deleteLocalFiles([filteredImage])
        }
      } )
    }
  } );
    
  // Start the Server
  app.listen( port, () => {
      console.log( `server running http://localhost:${ port }` );
      console.log( `press CTRL+C to stop server` );
  } );
})();