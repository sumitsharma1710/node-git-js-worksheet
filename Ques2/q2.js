const fs = require('fs').promises; 
const axios = require('axios');

async function combineDataSources(filePaths, apiUrls) {
  // Here deifined an empty object to store all the data 
  let mergedData = {};

  // Read data from array of files
  for (const filePath of filePaths) {
    try {
      const fileContent = await fs.readFile(filePath, 'utf8');
      const fileData = JSON.parse(fileContent);
      mergedData = { ...mergedData, ...fileData };
    } catch (error) {
      // Here I have used catch block because in case a file from multiple files is not readable so that will be console logged and the array will continue looping for the other files . 
      console.log(`Error occurred while reading file ${filePath}: ${error.message}`);
    }
  }

  // Fetch data from array of APIs
  for (const url of apiUrls) {
    try {
      const response = await axios.get(url);
      const apiData = response.data;
      mergedData = { ...mergedData, ...apiData };
    } catch (error) {
      console.error(`Error details: ${error.message}`);
    }
  }

  return mergedData;
}

const apikey = "6f53c7c443a60c00dddf92c7311f3469";
const lat = "22.6708";
const lon = "71.5724";
const filePaths = ['./Ques2/data/data.json', './Ques2/data/moredata.json']; 
const apiUrls = [`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}`];

// Export the function and parameters without resolving the promise here
module.exports = { combineDataSources, filePaths, apiUrls };
