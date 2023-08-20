import React from 'react'
import DownloadIcon from '@mui/icons-material/Download';


//download image
//get help from 
//https://fontawesomeicons.com/fa/react-js-download-image-from-url?utm_content=cmp-true
//https://stackoverflow.com/questions/43462367/how-to-overcome-the-cors-issue-in-reactjs
//https://stackoverflow.com/questions/59045549/download-image-using-fetch-in-reactjs
const Button = ({image}) => {

        const downloadImage = (imageUrl) => {
// fetch(`https://cors-anywhere.herokuapp.com/${imageUrl}}`)
// fetch(imageUrl,{
//         mode: 'no-cors',     
// } )
//↑↑↑ download txt file instead jpg/png 
            fetch(imageUrl)
                .then(response => response.blob())
                .then(blob => {
                    // Create a temporary anchor element
                    const url = window.URL.createObjectURL(blob);
                    const link = document.createElement('a');
                    link.href = url;

                    // Extract the filename from the URL
                    const filename = "my-meme";

                    // Set the download attribute and filename
                    link.setAttribute('download', filename);
                    document.body.appendChild(link);

                    // Simulate a click on the anchor element to start the download
                    link.click();

                    // Clean up the temporary anchor element
                    link.parentNode.removeChild(link);

                    // Set the downloaded image URL to display on the page
                    // setImageUrl(url);
                })
                .catch(error => {
                    console.error('Error downloading image:', error);
                });
        };

        const handleDownload = () => {
            downloadImage(image);
            console.log(image);
        };
  return (
    <div className='btn-container'>
            <button className='btn-download' onClick={handleDownload}> <DownloadIcon /><span>Download</span></button>
        </div>
  )
}

export default Button
